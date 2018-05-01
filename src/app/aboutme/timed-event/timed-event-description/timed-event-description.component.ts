import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timed-event-description',
  templateUrl: './timed-event-description.component.html',
  styleUrls: ['./timed-event-description.component.css']
})
export class TimedEventDescriptionComponent implements OnInit {

  @Input()
  descriptionLines: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
