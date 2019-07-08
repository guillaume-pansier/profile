import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutmeModule } from './aboutme/aboutme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout-module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
