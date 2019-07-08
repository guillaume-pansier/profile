import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';

const routes: Routes = [
    { path: '', component: PlaygroundComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
