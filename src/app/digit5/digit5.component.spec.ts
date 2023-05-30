import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digit5Component } from './digit5.component';

describe('Digit5Component', () => {
  let component: Digit5Component;
  let fixture: ComponentFixture<Digit5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Digit5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digit5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
