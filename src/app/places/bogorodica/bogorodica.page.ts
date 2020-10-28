import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-bogorodica',
  templateUrl: './bogorodica.page.html',
  styleUrls: ['./bogorodica.page.scss'],
})
export class BogorodicaPage implements OnInit {

  constructor(
      private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack('/tabs');
  }

}
