import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorpowComponent } from './operatorpow.component';

describe('OperatorpowComponent', () => {
  let component: OperatorpowComponent;
  let fixture: ComponentFixture<OperatorpowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorpowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorpowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
