import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsqrComponent } from './operatorsqr.component';

describe('OperatorsqrComponent', () => {
  let component: OperatorsqrComponent;
  let fixture: ComponentFixture<OperatorsqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsqrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorsqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
