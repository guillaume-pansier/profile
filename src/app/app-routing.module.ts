import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


import { AppComponent } from './app.component';


const routes: Route[] = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '', component: AppComponent, children: [
    { path: 'welcome', component: AppComponent},
    { path: 'aboutme', component: AppComponent},
    { path: 'interests', component: AppComponent},
    { path: 'playground', component: AppComponent}
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
