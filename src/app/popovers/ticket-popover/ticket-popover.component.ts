import { Component, OnInit } from '@angular/core';
import {PopoverController, NavParams} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-ticket-popover',
    templateUrl: './ticket-popover.component.html',
    styleUrls: ['./ticket-popover.component.scss'],
})
export class TicketPopoverComponent implements OnInit {
    item: any = {};
    quantity = 0;
    constructor(
        private  popoverCtrl: PopoverController,
        private navParams: NavParams,
        private storage: Storage
    ) {
        this.item = this.navParams.get('item');
    }

    ngOnInit() {}

    addTickets(item) {
        item.quantity = this.quantity;
        this.storage.get('kicevo.Tickets').then((data: any) => {
            // tslint:disable-next-line:triple-equals
              if (!data || data.length == 0) {
                  const myItems: any = [
                      item
                  ];
                  this.storage.set('kicevo.myItems', myItems);
              } else {
                 let foundIndex = -1;
                 for (let i = 0; i < data.length; i++) {
                      if (item.id == data[i].id) {
                          foundIndex = i;
                          break;
                      }
                  }
                 if (foundIndex > -1 ) {
                      data[foundIndex]. quantity++;
                  } else {
                      data.push(item);
                  }
                 this.storage.set('kicevo.myItems', data);
              }
            });
    }




    async dismissPopover() {
        await this.popoverCtrl.dismiss();
    }

}
