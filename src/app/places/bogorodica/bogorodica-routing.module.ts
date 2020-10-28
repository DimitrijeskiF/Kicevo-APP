import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BogorodicaPage } from './bogorodica.page';

const routes: Routes = [
  {
    path: '',
    component: BogorodicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BogorodicaPageRoutingModule {}
