import { Routes, RouterModule } from '@angular/router';
import { InterestsComponent } from './interests.component';
import { NgModule } from '@angular/core';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  { path: '', component: InterestsComponent},
  { path: 'travel', component: TravelComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InterestRoutingModule { }
