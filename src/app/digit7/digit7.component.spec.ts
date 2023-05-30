import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digit7Component } from './digit7.component';

describe('Digit7Component', () => {
  let component: Digit7Component;
  let fixture: ComponentFixture<Digit7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Digit7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digit7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
