import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPlacePageRoutingModule } from './all-place-routing.module';

import { AllPlacePage } from './all-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllPlacePageRoutingModule
  ],
  declarations: [AllPlacePage]
})
export class AllPlacePageModule {}
