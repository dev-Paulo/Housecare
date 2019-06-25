import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaPage } from './casa.page';

describe('CasaPage', () => {
  let component: CasaPage;
  let fixture: ComponentFixture<CasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
