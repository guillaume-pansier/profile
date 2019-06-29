import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule, MatListModule, MatSlideToggleModule, MatStepperModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularTechnologyComponent } from './angular-technology/angular-technology.component';
import { CicdTechnologyComponent } from './cicd-technology/cicd-technology.component';
import { PlaygroundComponent } from './playground.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
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
  declarations: [PlaygroundComponent, AngularTechnologyComponent, CicdTechnologyComponent]
})
export class PlaygroundModule { }
