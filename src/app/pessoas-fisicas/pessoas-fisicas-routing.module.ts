import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoasFisicasPage } from './pessoas-fisicas.page';

const routes: Routes = [
  {
    path: '',
    component: PessoasFisicasPage,
    children: [
        ]
  },
  {
    path: ':id',
    loadChildren: () => import('./detalhe-pessoa-fisica/detalhe-pessoa-fisica.module').then( m => m.DetalhePessoaFisicaPageModule),
  },
  {
    path: 'formulario/pessoa-fisica/:id',
    loadChildren: () => import('./form-pessoa-fisica/form-pessoa-fisica.module').then(m => m.FormPessoaFisicaPageModule)
  },
  {
    path: 'formulario/pessoa-fisica',
    loadChildren: () => import('./form-pessoa-fisica/form-pessoa-fisica.module').then(m => m.FormPessoaFisicaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoasFisicasPageRoutingModule { }
