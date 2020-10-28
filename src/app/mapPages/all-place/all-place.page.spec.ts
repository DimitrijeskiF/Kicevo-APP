import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllPlacePage } from './all-place.page';

describe('AllPlacePage', () => {
  let component: AllPlacePage;
  let fixture: ComponentFixture<AllPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPlacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
