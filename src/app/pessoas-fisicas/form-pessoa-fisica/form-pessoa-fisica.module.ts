import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormPessoaFisicaPageRoutingModule } from './form-pessoa-fisica-routing.module';

import { FormPessoaFisicaPage } from './form-pessoa-fisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPessoaFisicaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FormPessoaFisicaPage]
})
export class FormPessoaFisicaPageModule {}
