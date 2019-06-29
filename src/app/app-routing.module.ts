import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { PlaygroundComponent } from './playground/playground.component';




const routes: Route[] = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '', component: LayoutComponent, children: [
    { path: 'welcome', component: HomeComponent},
    { path: 'aboutme', component: AboutmeComponent},
    { path: 'technologies', component: PlaygroundComponent},
    { path: 'interests', loadChildren: 'app/interests/interest.module#InterestModule'}
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
