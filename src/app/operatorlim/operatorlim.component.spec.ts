import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorlimComponent } from './operatorlim.component';

describe('OperatorlimComponent', () => {
  let component: OperatorlimComponent;
  let fixture: ComponentFixture<OperatorlimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorlimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
