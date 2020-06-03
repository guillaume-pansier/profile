import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { InterestRoutingModule } from './interests-routing-module';
import { InterestsComponent } from './interests.component';
import { CountrySVGComponent } from './travel/country-svg/country-svg.component';
import { CountryRepository } from './travel/country/country-repository';
import { ResidenceService } from './travel/residence/residence-service';
import { TravelComponent } from './travel/travel.component';
import { TripService } from './travel/trip/trip-service';


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
