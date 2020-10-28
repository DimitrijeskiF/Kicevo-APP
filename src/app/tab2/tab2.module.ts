import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {ClubPopoverComponent} from '../popovers/club-popover/club-popover.component';
import {TicketPopoverComponent} from '../popovers/ticket-popover/ticket-popover.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [
    Tab2Page,
    ClubPopoverComponent,
      TicketPopoverComponent
  ],
  entryComponents: [
    ClubPopoverComponent,
      TicketPopoverComponent
  ]
})
export class Tab2PageModule {}
