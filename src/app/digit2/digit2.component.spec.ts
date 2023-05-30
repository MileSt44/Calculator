import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digit2Component } from './digit2.component';

describe('Digit2Component', () => {
  let component: Digit2Component;
  let fixture: ComponentFixture<Digit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Digit2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
