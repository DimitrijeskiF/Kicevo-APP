import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeorgijaPage } from './georgija.page';

describe('GeorgijaPage', () => {
  let component: GeorgijaPage;
  let fixture: ComponentFixture<GeorgijaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeorgijaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeorgijaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
