import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoasFisicasPage } from './pessoas-fisicas.page';

describe('PessoasFisicasPage', () => {
  let component: PessoasFisicasPage;
  let fixture: ComponentFixture<PessoasFisicasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PessoasFisicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
