import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormPessoaFisicaPageRoutingModule } from './form-pessoa-fisica-routing.module';

import { FormPessoaFisicaPage } from './form-pessoa-fisica.page';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPessoaFisicaPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [FormPessoaFisicaPage]
})
export class FormPessoaFisicaPageModule {}
