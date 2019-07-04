import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from './aboutme.component';
import { TimedEventComponent } from './timed-event/timed-event.component';
import { DrawerSideComponent } from './drawer-side/drawer-side.component';
import { TimedEventDescriptionComponent } from './timed-event/timed-event-description/timed-event-description.component';
import { OverlayModule } from '@angular/cdk/overlay';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './event.service';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    OverlayModule
  ],
  declarations: [
    AboutmeComponent,
    TimedEventComponent,
    TimedEventDescriptionComponent,
    DrawerSideComponent
  ],
  exports: [
    AboutmeComponent
  ],
  providers: [ EventService ]
})
export class AboutmeModule { }
