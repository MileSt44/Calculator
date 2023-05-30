import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorcubComponent } from './operatorcub.component';

describe('OperatorcubComponent', () => {
  let component: OperatorcubComponent;
  let fixture: ComponentFixture<OperatorcubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorcubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorcubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
