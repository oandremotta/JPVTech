import { IonicModule } from '@ionic/angular';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CpfPipe } from '../pipes/cpf.pipe';
import { CurrencyBrPipe } from '../pipes/currency-br.pipe';
import { CurrencyInputDirective } from '../directives/currency-input.directive';
import { CpfInputDirective } from '../directives/cpf-input.directive';
import { DateFormatDirective } from '../directives/date-input.directive';

@NgModule({
  declarations: [
    CpfPipe,
    CurrencyBrPipe,
    CurrencyInputDirective,
    CpfInputDirective,
    DateFormatDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  exports: [
    CpfPipe,
    CurrencyBrPipe,
    CurrencyInputDirective,
    CpfInputDirective,
    DateFormatDirective,
  ],
  providers: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
