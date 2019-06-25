import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousecarePage } from './housecare.page';

describe('HousecarePage', () => {
  let component: HousecarePage;
  let fixture: ComponentFixture<HousecarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousecarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousecarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
