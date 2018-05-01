import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from './layout/layout-module';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AboutmeModule } from './aboutme/aboutme.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterestsComponent,
    PlaygroundComponent
],
  imports: [
    LayoutModule,
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    AboutmeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
