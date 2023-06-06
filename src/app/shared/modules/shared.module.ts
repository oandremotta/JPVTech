import { IonicModule } from '@ionic/angular';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CpfPipe } from '../pipes/cpf.pipe';
import { CurrencyBrPipe } from '../pipes/currency-br.pipe';
import { CurrencyInputDirective } from '../directives/currency-input.directive';
import { CpfInputDirective } from '../directives/cpf-input.directive';
import { DateFormatDirective } from '../directives/date-input.directive';
import { DateFormatPipe } from '../pipes/date.pipe';

@NgModule({
  declarations: [
    CpfPipe,
    CurrencyBrPipe,
    DateFormatPipe,
    CurrencyInputDirective,
    CpfInputDirective,
    DateFormatDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  exports: [
    CpfPipe,
    CurrencyBrPipe,
    DateFormatPipe,
    CurrencyInputDirective,
    CpfInputDirective,
    DateFormatDirective,
  ],
  providers: [CpfPipe, CurrencyBrPipe, DateFormatPipe],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
