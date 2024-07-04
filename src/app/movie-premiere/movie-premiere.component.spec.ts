import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePremiereComponent } from './movie-premiere.component';

describe('MoviePremiereComponent', () => {
  let component: MoviePremiereComponent;
  let fixture: ComponentFixture<MoviePremiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePremiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviePremiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
