import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digit0Component } from './digit0.component';

describe('Digit0Component', () => {
  let component: Digit0Component;
  let fixture: ComponentFixture<Digit0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Digit0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digit0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
