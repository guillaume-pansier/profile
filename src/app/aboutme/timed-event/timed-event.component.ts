import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-timed-event',
  templateUrl: './timed-event.component.html',
  styleUrls: ['./timed-event.component.css']
})
export class TimedEventComponent implements OnInit {

  @Input() date: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() badge: string;
  @Input() eventImage: string;

  overlayRef: OverlayRef;
  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  modalImage: string;

  openEventImage() {
    if (this.eventImage) {
      this.overlayRef = this.overlay.create();
      const eventImagePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
      this.overlayRef.attach(eventImagePortal);
    }
  }

  closeModal() {
    this.overlayRef.detach();
  }
  constructor(private overlay: Overlay, private _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
