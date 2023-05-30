import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digit9Component } from './digit9.component';

describe('Digit9Component', () => {
  let component: Digit9Component;
  let fixture: ComponentFixture<Digit9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Digit9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digit9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
