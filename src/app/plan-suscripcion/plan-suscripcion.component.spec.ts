import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSuscripcionComponent } from './plan-suscripcion.component';

describe('PlanSuscripcionComponent', () => {
  let component: PlanSuscripcionComponent;
  let fixture: ComponentFixture<PlanSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanSuscripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
