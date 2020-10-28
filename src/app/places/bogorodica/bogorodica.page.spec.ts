import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BogorodicaPage } from './bogorodica.page';

describe('BogorodicaPage', () => {
  let component: BogorodicaPage;
  let fixture: ComponentFixture<BogorodicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BogorodicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BogorodicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
