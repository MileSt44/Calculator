import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorrootComponent } from './operatorroot.component';

describe('OperatorrootComponent', () => {
  let component: OperatorrootComponent;
  let fixture: ComponentFixture<OperatorrootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorrootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
