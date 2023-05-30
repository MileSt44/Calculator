import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorequateComponent } from './operatorequate.component';

describe('OperatorequateComponent', () => {
  let component: OperatorequateComponent;
  let fixture: ComponentFixture<OperatorequateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorequateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorequateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
