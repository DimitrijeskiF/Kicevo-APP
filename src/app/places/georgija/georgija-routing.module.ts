import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeorgijaPage } from './georgija.page';

const routes: Routes = [
  {
    path: '',
    component: GeorgijaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeorgijaPageRoutingModule {}
