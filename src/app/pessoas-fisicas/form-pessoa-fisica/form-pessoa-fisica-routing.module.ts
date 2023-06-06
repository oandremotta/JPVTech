import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPessoaFisicaPage } from './form-pessoa-fisica.page';

const routes: Routes = [
  {
    path: '',
    component: FormPessoaFisicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPessoaFisicaPageRoutingModule {}
