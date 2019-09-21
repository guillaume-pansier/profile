import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimedEvent } from './timed-event/timed-event';
import { Observable } from 'rxjs';


@Injectable()
export class ProfileService {

  jsonUrl = 'assets/aboutme.json';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(this.jsonUrl);
  }
}


export interface EventGroup {
  category: string;
  events: TimedEvent[];
}

export interface ProfileResponse {
  eventsGroups: EventGroup[];
  skills: string[];
  languages: string[];
  contacts: any[];
}

