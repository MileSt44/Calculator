import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatormulComponent } from './operatormul.component';

describe('OperatormulComponent', () => {
  let component: OperatormulComponent;
  let fixture: ComponentFixture<OperatormulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatormulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatormulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
