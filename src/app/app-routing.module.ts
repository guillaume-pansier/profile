import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { InterestsComponent } from './interests/interests.component';
import { PlaygroundComponent } from './playground/playground.component';


const routes: Route[] = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '', component: LayoutComponent, children: [
    { path: 'welcome', component: HomeComponent},
    { path: 'aboutme', component: AboutmeComponent},
    { path: 'interests', component: InterestsComponent},
    { path: 'playground', component: PlaygroundComponent}
  ]},
  { path: '**', redirectTo: 'welcome'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
