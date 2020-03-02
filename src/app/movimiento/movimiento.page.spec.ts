import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovimientoPage } from './movimiento.page';

describe('MovimientoPage', () => {
  let component: MovimientoPage;
  let fixture: ComponentFixture<MovimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
