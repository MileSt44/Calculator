import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digit6Component } from './digit6.component';

describe('Digit6Component', () => {
  let component: Digit6Component;
  let fixture: ComponentFixture<Digit6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Digit6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digit6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
