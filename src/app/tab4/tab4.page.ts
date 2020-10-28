import { Component, OnInit } from '@angular/core';
import {NavController, Events} from '@ionic/angular';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
    selector: 'app-tab4',
    templateUrl: './tab4.page.html',
    styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

    notes: any = [];

    constructor(
        private storageService: StorageService,
        private navCtrl: NavController,
        private events: Events
    ) {
        this.events.subscribe('noteEdited', (note) => {
            console.log(note);
        });
    }

    ngOnInit() {
        this.storageService.getNotes((notes) => {
            this.notes = notes;
        });
    }

    openNewNotePage(){
        this.navCtrl.navigateForward('/new-note');
    }
}
