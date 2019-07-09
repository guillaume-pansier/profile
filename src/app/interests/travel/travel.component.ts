import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './country/country';
import { CountryRepository } from './country/country-repository';
import { Residence } from './residence/residence';
import { ResidenceService } from './residence/residence-service';
import { Trip } from './trip/trip';
import { TripService } from './trip/trip-service';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelComponent implements OnInit {

  state$: Observable< { countries: Country[], residences: Residence[], trips: Trip[] }>;

  constructor( private countryRepository: CountryRepository, public snackBar: MatSnackBar,
              private tripService: TripService, private residenceService: ResidenceService,
            ) {

  }

  trackByCountries(index: number, country: Country): string { return country.id; }

  ngOnInit(): void {

    this.state$ = zip(
      this.tripService.getTrips(),
      this.countryRepository.loadCountries(),
      this.residenceService.getResidences()
    ).pipe(
      map(([trips, countries, residences]) => {
        return { countries, trips, residences };
      })
    );
  }

  isCountryVisited(countryID: string, state: { countries: Country[], residences: Residence[], trips: Trip[] }) {
    const visitedCountriesID = state.trips.map(trip => trip.countryIds).reduce((previous, actual) => {
      return previous.concat(...actual);
    }, []);
    visitedCountriesID.push(...state.residences.map(residence => residence.countryId));

    return visitedCountriesID.includes(countryID);
  }

  onClickCountry(country: Country, state: { countries: Country[], residences: Residence[], trips: Trip[] }) {

    const residenceInCountry = state.residences.find(residence => residence.countryId === country.id);
    if (residenceInCountry) {
      this.snackBar.open( `I've lived in ${country.name} for ${residenceInCountry.numberOfYears} years`, null, {
        duration: 2000,
      });
      return;
    }

    const trips = state.trips.filter(trip => trip.countryIds.includes(country.id)).map(trip => trip.year);
    if (trips && trips.length > 0) {
      this.snackBar.open( `I've visited ${country.name} in ${trips.join(', ')}`, null, {
        duration: 2000,
      });
    } else {
      this.snackBar.open(`I\'ve never been in ${country.name} !`, null, {
        duration: 2000,
      });
    }
  }
}
