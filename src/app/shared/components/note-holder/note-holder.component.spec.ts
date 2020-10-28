import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteHolderComponent } from './note-holder.component';

describe('NoteHolderComponent', () => {
  let component: NoteHolderComponent;
  let fixture: ComponentFixture<NoteHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteHolderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
