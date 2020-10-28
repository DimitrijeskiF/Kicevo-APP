import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from '../../../services/storage/storage.service';
import {NavController, Events} from '@ionic/angular';
import {NavigationExtras} from '@angular/router';

@Component({
    selector: 'app-note-holder',
    templateUrl: './note-holder.component.html',
    styleUrls: ['./note-holder.component.scss'],
})
export class NoteHolderComponent implements OnInit {

    @Input() notes: any = [];

    constructor(
        private storageService: StorageService,
        private navCtrl: NavController,
        private events: Events
    ) {

    }

    ngOnInit() {

        this.events.subscribe('noteStored', (note) => {
            if(!this.notes)
                this.notes = [];

            this.notes.push(note);
        });
    }


    editNote(note) {

        const navigationExtras: NavigationExtras = {
            queryParams: {
                note
            }
        };

        this.navCtrl.navigateForward('/new-note', navigationExtras);

    }

}
