import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Route[] = [
  { path: '', component: LayoutComponent, children: [
    { path: 'welcome', component: HomeComponent},
    { path: 'aboutme', component: LayoutComponent},
    { path: 'interests', component: LayoutComponent},
    { path: 'playground', component: LayoutComponent}
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
