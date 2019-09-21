import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService, ProfileResponse } from './event.service';
import { TimedEvent } from './timed-event/timed-event';


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
  data: ProfileResponse = {
    eventsGroups: [
      { category: 'Work Experience', events: [ { date: 'just now', title: 'Loading events'}]}
    ],
    skills: [ 'Java 8'],
    languages: [ 'French' ],
    contacts: [ { href: '/', value: 'guillaume.pansier@gmail.com', materialIcon: 'email' }]
  };

  constructor(private profileService: ProfileService, media: MediaMatcher, changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.profileService.getProfile().subscribe(
      data => {
        this.data = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
