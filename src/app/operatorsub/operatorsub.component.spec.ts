import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsubComponent } from './operatorsub.component';

describe('OperatorsubComponent', () => {
  let component: OperatorsubComponent;
  let fixture: ComponentFixture<OperatorsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
