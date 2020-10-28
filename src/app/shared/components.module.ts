import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {NoteHolderComponent} from './components/note-holder/note-holder.component';


@NgModule({
    declarations: [
        NoteHolderComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        NoteHolderComponent
    ]
})
export class ComponentsModule { }
