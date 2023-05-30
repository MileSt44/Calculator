import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digit8Component } from './digit8.component';

describe('Digit8Component', () => {
  let component: Digit8Component;
  let fixture: ComponentFixture<Digit8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Digit8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digit8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
