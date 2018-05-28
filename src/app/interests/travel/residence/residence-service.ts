import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Residence } from './residence';

@Injectable()
export class ResidenceService {
  constructor(private httpClient: HttpClient) { }

  getResidences(): Observable<Residence[]> {
    return this.httpClient.get<Residence[]>('assets/travel/residences.json');
  }
}
