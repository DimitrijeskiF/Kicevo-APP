import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.page.html',
  styleUrls: ['./intro-page.page.scss'],
})
export class IntroPagePage implements OnInit {

  constructor(
      private navCtrl: NavController,
      private storage: Storage
  ) { }

  ngOnInit() {
  }
  goToHome() {
    this.navCtrl.navigateRoot('/tabs');
    this.storage.set('exploreKicevo.introOpened', true);
  }
}
