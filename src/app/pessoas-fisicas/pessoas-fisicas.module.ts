import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoasFisicasPageRoutingModule } from './pessoas-fisicas-routing.module';

import { PessoasFisicasPage } from './pessoas-fisicas.page';
import { ItemPessoaFisicaComponent } from './item-pessoa-fisica/item-pessoa-fisica.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoasFisicasPageRoutingModule,
  ],
  declarations: [PessoasFisicasPage, ItemPessoaFisicaComponent]
})
export class PessoasFisicasPageModule {}
