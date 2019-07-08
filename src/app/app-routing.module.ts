import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';




const routes: Route[] = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '', component: LayoutComponent, children: [
    { path: 'welcome', component: HomeComponent},
    { path: 'aboutme', loadChildren: 'app/aboutme/aboutme.module#AboutmeModule' },
    { path: 'technologies', loadChildren: 'app/playground/playground.module#PlaygroundModule' },
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
