import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatordivComponent } from './operatordiv.component';

describe('OperatordivComponent', () => {
  let component: OperatordivComponent;
  let fixture: ComponentFixture<OperatordivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatordivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatordivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
