import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(
        private storage: Storage
    ) { }

    getNextId(callback) {
        this.storage.get('kicevoApp.notes').then((data: any) => {
            if (data && data.length) {
                const lastId = data[data.length - 1].id;
                callback(Number(lastId) + 1);
            } else {
                callback(1);
            }
        });
    }

    storeNewNote(note, callback) {
        this.storage.get('kicevoApp.notes').then((data: any) => {
            data && data.length ? data.push(note) : data = [note];
            this.storage.set('kicevoApp.notes', data);

            callback(true);
        });
    }

    getNotes(callback) {
        this.storage.get('kicevoApp.notes').then((data) => {
            callback(data);
        });
    }

    updateNote(note) {

        this.storage.get('kicevoApp.notes').then((data: any) => {

            for (let i = 0; i < data.length; i++) {
                if (data[i].id == note.id) {
                    data[i] = note;
                }
            }

            this.storage.set('kicevoApp.notes', data);

        });
    }

    deleteNote(id) {
        this.storage.get('kicevoApp.notes').then((data: any) => {

            data = data.filter((el) => {
                return id !== el.id;
            });

            this.storage.set('kicevoApp.notes', data);

        });
    }
}
