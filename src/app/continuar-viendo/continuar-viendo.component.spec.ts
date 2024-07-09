import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuarViendoComponent } from './continuar-viendo.component';

describe('ContinuarViendoComponent', () => {
  let component: ContinuarViendoComponent;
  let fixture: ComponentFixture<ContinuarViendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuarViendoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinuarViendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
