import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimedEvent } from './timed-event/timed-event';
import { Observable } from 'rxjs';


@Injectable()
export class EventService {
  jsonUrl = 'assets/aboutme.json';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventGroup[]> {
    return this.http.get<EventResponse>(this.jsonUrl).pipe(map(data => data.eventsGroups));
  }
}


export interface EventGroup {
  category: string;
  events: TimedEvent[];
}

export interface EventResponse {
  eventsGroups: EventGroup[];
}

