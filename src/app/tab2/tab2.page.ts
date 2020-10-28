import { Component } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {ClubPopoverComponent} from '../popovers/club-popover/club-popover.component';
import {TicketPopoverComponent} from '../popovers/ticket-popover/ticket-popover.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items: any = [];
  constructor(
      private popoverCtrl: PopoverController
  ) {
    const item: any = {
      id: 1,
      title: 'Republika Club Restaurant',
      fridayEvent: 'Marko Logout',
      saturdayEvent: 'Line Out',
      picture: 'assets/images/club1.jpg',
      enteringPriceF: 1,
      enteringPriceS: 1,
    };

    this.items.push(item);

    const item1: any = {
      id: 2,
      title: 'Club Image',
      fridayEvent: 'Dj Gec',
      saturdayEvent: 'The Hounds',
      picture: 'assets/images/club2.jpg',
      enteringPriceF: 1,
      enteringPriceS: 2,
    };

    this.items.push(item1);

    const item2: any = {
      id: 3,
      title: 'Lounge Bar New Age',
      fridayEvent: 'Goran Slide',
      saturdayEvent: 'Marko Logout',
      picture: 'assets/images/club3.jpg',
      enteringPriceF: 1,
      enteringPriceS: 2
    };

    this.items.push(item2);

    const item3: any = {
      id: 4,
      title: 'Lounge Bar Bacardi',
      fridayEvent: 'Line out',
      saturdayEvent: 'Vlatko Lozanoski',
      picture: 'assets/images/club4.png',
      enteringPriceF: 1,
      enteringPriceS: 3.99,
    };

    this.items.push(item3);

    const item4: any = {
      id: 5,
      title: 'Atva Residence',
      fridayEvent: 'Grupa Saraj',
      saturdayEvent: 'Private Party',
      picture: 'assets/images/club5.jpg',
      enteringPriceF: 1,
    };

    this.items.push(item4);


    const item5: any = {
      id: 6,
      title: 'Check In 2018',
      fridayEvent: 'Latino Music',
      saturdayEvent: 'Ex-Yu Hits',
      picture: 'assets/images/club6.jpg',
      enteringPriceF: 1,
    };

    this.items.push(item5);


    const item6: any = {
      id: 7,
      title: 'Club Maalo',
      fridayEvent: 'Joce Panov',
      saturdayEvent: 'Gjoko Taneski',
      picture: 'assets/images/club7.jpg',
      enteringPriceF: 1,
      enteringPriceS: 1.99,

    };

    this.items.push(item6);


    const item7: any = {
      id: 8,
      title: 'Club Gravity',
      fridayEvent: 'High Control',
      saturdayEvent: 'Latino Night',
      picture: 'assets/images/club8.png',
      enteringPriceF: 1.50,
    };

    this.items.push(item7);


    const item8: any = {
      id: 9,
      title: 'Vintage',
      fridayEvent: 'Latino Night',
      saturdayEvent: 'Latino Night',
      picture: 'assets/images/club9.jpg',
    };

    this.items.push(item8);


  }
  async showEvents(item) {
    const popover = await this.popoverCtrl.create({
      component: ClubPopoverComponent,
      componentProps: { item }
    });

    return await popover.present();
  }

  async showTicker(item) {
    const popover = await this.popoverCtrl.create({
      component: TicketPopoverComponent,
      componentProps: { item }
    });

    return await popover.present();
  }
}
