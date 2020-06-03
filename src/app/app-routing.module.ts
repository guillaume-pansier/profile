import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';




const routes: Route[] = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '', component: LayoutComponent, children: [
    { path: 'welcome', component: HomeComponent},
    { path: 'aboutme', loadChildren: () => import('app/aboutme/aboutme.module').then(m => m.AboutmeModule) },
    { path: 'technologies', loadChildren: () => import('app/playground/playground.module').then(m => m.PlaygroundModule) },
    { path: 'interests', loadChildren: () => import('app/interests/interest.module').then(m => m.InterestModule)}
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
