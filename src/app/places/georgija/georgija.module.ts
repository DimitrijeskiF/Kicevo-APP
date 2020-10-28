import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeorgijaPageRoutingModule } from './georgija-routing.module';

import { GeorgijaPage } from './georgija.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeorgijaPageRoutingModule
  ],
  declarations: [GeorgijaPage]
})
export class GeorgijaPageModule {}
