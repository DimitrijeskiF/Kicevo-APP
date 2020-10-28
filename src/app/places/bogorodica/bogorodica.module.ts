import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BogorodicaPageRoutingModule } from './bogorodica-routing.module';

import { BogorodicaPage } from './bogorodica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BogorodicaPageRoutingModule
  ],
  declarations: [BogorodicaPage]
})
export class BogorodicaPageModule {}
