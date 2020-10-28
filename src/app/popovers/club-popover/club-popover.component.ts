import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {TicketPopoverComponent} from '../ticket-popover/ticket-popover.component';

@Component({
    selector: 'app-club-popover',
    templateUrl: './club-popover.component.html',
    styleUrls: ['./club-popover.component.scss'],
})
export class ClubPopoverComponent implements OnInit {
    item: any = {};
    currentData;
    friday;
    saturday;

    constructor(
        private popoverCtrl: PopoverController
    ) {
        this.currentData = new Date();
        this.getFriday();
        this.getSaturday();
    }

    ngOnInit() {}

    async dismissPopover() {
        await this.popoverCtrl.dismiss();
    }

    getFriday() {
        const dayOfWeek = 5;
        const date = new Date(2020, 0, 12);
        const dif = date.getDay() - dayOfWeek;
        if (dif > 0) {
            date.setDate(date.getDay() + 6);
        } else if (dif < 0) {
            date.setDate(date.getDate() + ((-1) * dif));
        }

        this.friday = date.toDateString();
    }

    getSaturday() {
        const dayOfWeek = 6;
        const date = new Date(2020, 0, 12);
        const dif = date.getDay() - dayOfWeek;
        if (dif > 0) {
            date.setDate(date.getDay() + 6);
        } else if (dif < 0) {
            date.setDate(date.getDate() + ((-1) * dif));
        }

        this.saturday = date.toDateString();
    }

    // async showTicket(item) {
    //     const popover = await this.popoverCtrl.create({
    //         component: TicketPopoverComponent,
    //         componentProps: { item }
    //     });
    //
    //     return await popover.present();
    // }
}
