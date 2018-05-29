import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, mergeMap } from 'rxjs/operators';
import { Trip } from './trip';
import { Observable, of } from 'rxjs';

@Injectable()
export class TripService {

  constructor(private httpClient: HttpClient) { }

  getTrips(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>('assets/travel/trips.json');
  }

}
