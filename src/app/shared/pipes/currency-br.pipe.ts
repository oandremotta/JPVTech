import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBr'
})
export class CurrencyBrPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (!value) return '';
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
