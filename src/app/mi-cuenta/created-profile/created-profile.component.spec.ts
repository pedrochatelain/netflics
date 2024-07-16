import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedProfileComponent } from './created-profile.component';

describe('CreatedProfileComponent', () => {
  let component: CreatedProfileComponent;
  let fixture: ComponentFixture<CreatedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
