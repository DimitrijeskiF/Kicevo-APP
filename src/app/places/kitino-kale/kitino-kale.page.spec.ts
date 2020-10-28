import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KitinoKalePage } from './kitino-kale.page';

describe('KitinoKalePage', () => {
  let component: KitinoKalePage;
  let fixture: ComponentFixture<KitinoKalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitinoKalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KitinoKalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
