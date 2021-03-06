import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { AngularTechnologyComponent } from './angular-technology/angular-technology.component';
import { CicdTechnologyComponent } from './cicd-technology/cicd-technology.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';


@NgModule({
  imports: [
    PlaygroundRoutingModule,
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    PortalModule,
    MatDividerModule,
    MatListModule,
    MatStepperModule,
    MatSlideToggleModule
  ],
  entryComponents: [AngularTechnologyComponent, CicdTechnologyComponent],
  declarations: [PlaygroundComponent, AngularTechnologyComponent, CicdTechnologyComponent],
  exports: [ RouterModule ]
})
export class PlaygroundModule { }
