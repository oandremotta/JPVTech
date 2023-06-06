import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhePessoaFisicaPageRoutingModule } from './detalhe-pessoa-fisica-routing.module';

import { DetalhePessoaFisicaPage } from './detalhe-pessoa-fisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhePessoaFisicaPageRoutingModule
  ],
  declarations: [DetalhePessoaFisicaPage]
})
export class DetalhePessoaFisicaPageModule {}
