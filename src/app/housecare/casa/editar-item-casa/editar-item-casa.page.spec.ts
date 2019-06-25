import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarItemCasaPage } from './editar-item-casa.page';

describe('EditarItemCasaPage', () => {
  let component: EditarItemCasaPage;
  let fixture: ComponentFixture<EditarItemCasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarItemCasaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarItemCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
