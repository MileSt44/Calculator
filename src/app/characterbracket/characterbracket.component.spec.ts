import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterbracketComponent } from './characterbracket.component';

describe('CharacterbracketComponent', () => {
  let component: CharacterbracketComponent;
  let fixture: ComponentFixture<CharacterbracketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterbracketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterbracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
