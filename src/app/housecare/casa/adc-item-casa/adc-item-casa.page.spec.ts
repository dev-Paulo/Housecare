import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcItemCasaPage } from './adc-item-casa.page';

describe('AdcItemCasaPage', () => {
  let component: AdcItemCasaPage;
  let fixture: ComponentFixture<AdcItemCasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcItemCasaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcItemCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
