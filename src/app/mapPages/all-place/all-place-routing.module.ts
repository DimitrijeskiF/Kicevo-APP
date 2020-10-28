import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPlacePage } from './all-place.page';

const routes: Routes = [
  {
    path: '',
    component: AllPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPlacePageRoutingModule {}
