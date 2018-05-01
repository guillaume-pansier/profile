import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimedEvent } from './timed-event/timed-event';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
  jsonUrl = 'assets/aboutme.json';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventGroup[]> {
    return this.http.get<EventResponse>(this.jsonUrl). map(data => data.eventsGroups);
  }
}


export interface EventGroup {
  category: string;
  events: TimedEvent[];
}

export interface EventResponse {
  eventsGroups: EventGroup[];
}

