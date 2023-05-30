import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digit1Component } from './digit1.component';

describe('Digit1Component', () => {
  let component: Digit1Component;
  let fixture: ComponentFixture<Digit1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Digit1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
