import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digit4Component } from './digit4.component';

describe('Digit4Component', () => {
  let component: Digit4Component;
  let fixture: ComponentFixture<Digit4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Digit4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digit4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
