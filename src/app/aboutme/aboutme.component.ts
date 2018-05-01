import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { TimedEvent } from './timed-event/timed-event';
import { Http, Headers, Response } from '@angular/http';
import { EventService } from './event.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  // needs a dummy value, because angular material would add css
  // at comple time, when timeEventGroup is not yet defined, which breaks the layout
  timedEventGroups: { category: string, events: TimedEvent[] }[] = [ { category: 'dummy', events: []} ];

  constructor(private eventService: EventService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      data => {
        this.timedEventGroups = data;
      }
    );
  }
}
