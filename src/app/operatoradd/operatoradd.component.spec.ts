import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatoraddComponent } from './operatoradd.component';

describe('OperatoraddComponent', () => {
  let component: OperatoraddComponent;
  let fixture: ComponentFixture<OperatoraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatoraddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
