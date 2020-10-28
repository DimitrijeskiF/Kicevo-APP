import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-kitino-kale',
  templateUrl: './kitino-kale.page.html',
  styleUrls: ['./kitino-kale.page.scss'],
})
export class KitinoKalePage implements OnInit {

  constructor(
      private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.navigateBack('/tabs');
  }

}

