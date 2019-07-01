import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioSalvarPage } from './exercicio-salvar.page';

describe('ExercicioSalvarPage', () => {
  let component: ExercicioSalvarPage;
  let fixture: ComponentFixture<ExercicioSalvarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioSalvarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioSalvarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
