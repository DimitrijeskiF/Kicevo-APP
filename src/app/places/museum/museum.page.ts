import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-museum',
  templateUrl: './museum.page.html',
  styleUrls: ['./museum.page.scss'],
})
export class MuseumPage implements OnInit {

  constructor(
      private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.navigateBack('/tabs');
  }
}
