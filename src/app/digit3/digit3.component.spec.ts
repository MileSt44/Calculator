import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digit3Component } from './digit3.component';

describe('Digit3Component', () => {
  let component: Digit3Component;
  let fixture: ComponentFixture<Digit3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Digit3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digit3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
