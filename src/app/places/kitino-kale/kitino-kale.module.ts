import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitinoKalePageRoutingModule } from './kitino-kale-routing.module';

import { KitinoKalePage } from './kitino-kale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitinoKalePageRoutingModule
  ],
  declarations: [KitinoKalePage]
})
export class KitinoKalePageModule {}
