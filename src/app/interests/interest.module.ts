import { CountryRepository } from './travel/country/country-repository';
import { CountrySVGComponent } from './travel/country-svg/country-svg.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestsComponent } from './interests.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InterestRoutingModule } from './interests-routing-module';
import { TravelComponent } from './travel/travel.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TripService } from './travel/trip/trip-service';
import { ResidenceService } from './travel/residence/residence-service';
import { MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    InterestRoutingModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    InterestsComponent,
    TravelComponent,
    CountrySVGComponent
],
  exports: [ RouterModule ],
  providers: [
    CountryRepository,
    TripService,
    ResidenceService
   ]
})
export class InterestModule { }
