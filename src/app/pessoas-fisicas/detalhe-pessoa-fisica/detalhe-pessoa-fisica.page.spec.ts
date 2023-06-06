import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhePessoaFisicaPage } from './detalhe-pessoa-fisica.page';

describe('DetalhePessoaFisicaPage', () => {
  let component: DetalhePessoaFisicaPage;
  let fixture: ComponentFixture<DetalhePessoaFisicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalhePessoaFisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
