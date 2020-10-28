import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-georgija',
  templateUrl: './georgija.page.html',
  styleUrls: ['./georgija.page.scss'],
})
export class GeorgijaPage implements OnInit {

  constructor(
      private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.navigateBack('/tabs');
  }

}
