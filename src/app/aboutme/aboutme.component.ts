import { Component, OnInit, AfterViewChecked, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TimedEvent } from './timed-event/timed-event';
import { Http, Headers, Response } from '@angular/http';
import { EventService } from './event.service';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  // needs a dummy value, because angular material would add css
  // at comple time, when timeEventGroup is not yet defined, which breaks the layout
  timedEventGroups: { category: string, events: TimedEvent[] }[] = [
    { category: 'Work Experience', events: [ { date: 'just now', title: 'Loading events'}]}
  ];

  constructor(private eventService: EventService, media: MediaMatcher, changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      data => {
        this.timedEventGroups = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
