import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timed-event',
  templateUrl: './timed-event.component.html',
  styleUrls: ['./timed-event.component.css']
})
export class TimedEventComponent implements OnInit {

  @Input() date: string;
  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
