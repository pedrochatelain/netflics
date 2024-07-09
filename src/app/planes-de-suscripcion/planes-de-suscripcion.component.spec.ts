import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesDeSuscripcionComponent } from './planes-de-suscripcion.component';

describe('PlanesDeSuscripcionComponent', () => {
  let component: PlanesDeSuscripcionComponent;
  let fixture: ComponentFixture<PlanesDeSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesDeSuscripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesDeSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
