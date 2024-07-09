import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieContinuarViendoComponent } from './movie-continuar-viendo.component';

describe('MovieContinuarViendoComponent', () => {
  let component: MovieContinuarViendoComponent;
  let fixture: ComponentFixture<MovieContinuarViendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieContinuarViendoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieContinuarViendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
