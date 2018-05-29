import { TripService } from './trip/trip-service';
import { Component, OnInit, AfterViewInit, Inject, ViewChildren, QueryList } from '@angular/core';
import { Country } from './country/country';
import { mergeMap, map } from 'rxjs/operators';
import { Observable, of, zip } from 'rxjs';
import { STYLE_CLASS_NORMAL, STYLE_CLASS_HOVER, STYLE_CLASS_VISITED, CountrySVGComponent } from './country-svg/country-svg.component';
import { CountryRepository } from './country/country-repository';
import { Trip } from './trip/Trip';
import { MatSnackBar } from '@angular/material';
import { Residence } from './residence/residence';
import { ResidenceService } from './residence/residence-service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit, AfterViewInit {

  countries: Country[];
  trips: Trip[] = [];
  residences: Residence[] = [];

  @ViewChildren(CountrySVGComponent) svgCountries: QueryList<CountrySVGComponent>;

  constructor( @Inject(DOCUMENT) private document, private countryRepository: CountryRepository, public snackBar: MatSnackBar,
              private tripService: TripService, private residenceService: ResidenceService
            ) {

  }

  ngOnInit(): void {

    zip(
      this.tripService.getTrips(),
      this.countryRepository.loadCountries(),
      this.residenceService.getResidences()
    ).subscribe(([trips, countries, residences]) => {
      this.trips = trips;
      this.countries = countries;
      this.residences = residences;
    },
      () => { },
      () => { });

  }

  ngAfterViewInit(): void {

    if (this.countries && this.countries.length > 0) {
      this.loaTrips();
    } else {
      this.svgCountries.changes
        .subscribe(() => { this.loaTrips(); },
        () => { },
        () => { }
      );
    }
  }

  private loaTrips(): void {

    const visitedCountries = this.trips.map(trip => trip.countryIds).reduce((previous, actual, []) => {
      return previous.concat(...actual);
    });
    visitedCountries.push(...this.residences.map(residence => residence.countryId));
    this.colorCountries(visitedCountries);
  }

  onClickCountry(country: Country) {

    const residenceInCountry = this.residences.find(residence => residence.countryId === country.id);
    if (residenceInCountry) {
      this.snackBar.open( `I've lived in ${country.name} for ${residenceInCountry.numberOfYears} years`, null, {
        duration: 2000,
      });
      return;
    }

    const trips = this.trips.filter(trip => trip.countryIds.includes(country.id)).map(trip => trip.year);
    if (trips && trips.length > 0) {
      this.snackBar.open( `I've visited ${country.name} in ${trips.join(', ')}`, null, {
        duration: 2000,
      });
    } else {
      this.snackBar.open(`I\'ve neber been in ${country.name} !`, null, {
        duration: 2000,
      });
    }

  }

  onHoverCountry(country: Country) {
    this.changeCountryStyle(country.id, STYLE_CLASS_NORMAL, STYLE_CLASS_HOVER);
  }

  onLeaveCountry(country: Country) {
    this.changeCountryStyle(country.id, STYLE_CLASS_HOVER, STYLE_CLASS_NORMAL);
  }

  colorCountries(countryIds: string[]) {
      for (const countryId of countryIds) {
          this.addCountryStyle(countryId, STYLE_CLASS_VISITED);
      }
  }

  private changeCountryStyle(countryId, initialState, goalState) {
    const countryContainer = this.document.getElementById(countryId);
    this.swapStyle(countryContainer, initialState, goalState);

    for (const child of countryContainer.children) {
      this.swapStyle(child, initialState, goalState);
    }
  }

  private swapStyle(element, styleToRemove, styleToAdd) {
    if (element.classList.contains(styleToRemove)) {
      element.classList.remove(styleToRemove);
      element.classList.add(styleToAdd);
    }
  }

  private addCountryStyle(countryId, style) {
    const countryContainer = this.document.getElementById(countryId);
    countryContainer.classList.add(style);
    for (const child of countryContainer.children) {
      child.classList.add(style);
    }
  }

  private removeCountryStyle(countryId, style) {
    const countryContainer = this.document.getElementById(countryId);
    countryContainer.classList.remove(style);
    for (const child of countryContainer.children) {
      child.classList.remove(style);
    }
  }

}
