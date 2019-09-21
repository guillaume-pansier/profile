import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme.component';
import { DrawerSideComponent } from './drawer-side/drawer-side.component';
import { ProfileService } from './event.service';
import { TimedEventDescriptionComponent } from './timed-event/timed-event-description/timed-event-description.component';
import { TimedEventComponent } from './timed-event/timed-event.component';
import { AboutmeRoutingModule } from './aboutme-routing.module';


@NgModule({
  imports: [
    AboutmeRoutingModule,
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
    AboutmeComponent,
    RouterModule
  ],
  providers: [ ProfileService ]
})
export class AboutmeModule { }
