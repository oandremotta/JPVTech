import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPessoaFisicaPage } from './form-pessoa-fisica.page';

describe('FormPessoaFisicaPage', () => {
  let component: FormPessoaFisicaPage;
  let fixture: ComponentFixture<FormPessoaFisicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormPessoaFisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
