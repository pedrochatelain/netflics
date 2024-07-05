import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroDuracionComponent } from './filtro-duracion.component';

describe('FiltroDuracionComponent', () => {
  let component: FiltroDuracionComponent;
  let fixture: ComponentFixture<FiltroDuracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroDuracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroDuracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
