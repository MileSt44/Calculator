import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorlogComponent } from './operatorlog.component';

describe('OperatorlogComponent', () => {
  let component: OperatorlogComponent;
  let fixture: ComponentFixture<OperatorlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
