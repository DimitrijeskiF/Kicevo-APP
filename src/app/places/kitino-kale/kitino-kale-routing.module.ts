import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitinoKalePage } from './kitino-kale.page';

const routes: Routes = [
  {
    path: '',
    component: KitinoKalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitinoKalePageRoutingModule {}
