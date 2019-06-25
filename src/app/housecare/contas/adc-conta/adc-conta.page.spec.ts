import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcContaPage } from './adc-conta.page';

describe('AdcContaPage', () => {
  let component: AdcContaPage;
  let fixture: ComponentFixture<AdcContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcContaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
