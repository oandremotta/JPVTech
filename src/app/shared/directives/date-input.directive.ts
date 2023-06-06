import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dateFormat]'
})
export class DateFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const formattedValue = this.formatDate(value);
    this.el.nativeElement.value = formattedValue;
  }

  formatDate(value: string): string {
    // Remove caracteres inválidos da entrada
    const cleanedValue = value.replace(/[^0-9]/g, '');

    // Define o tamanho máximo do campo de data em caracteres
    const maxLength = 8;

    // Limita o tamanho da string
    const limitedValue = cleanedValue.slice(0, maxLength);

    // Formata a data por partes (dia, mês, ano)
    if (limitedValue.length > 2 && limitedValue.length <= 4) {
      const day = limitedValue.slice(0, 2);
      const month = limitedValue.slice(2);
      return `${day}/${month}`;
    } else if (limitedValue.length > 4 && limitedValue.length <= 8) {
      const day = limitedValue.slice(0, 2);
      const month = limitedValue.slice(2, 4);
      const year = limitedValue.slice(4);
      return `${day}/${month}/${year}`;
    }

    return limitedValue;
  }
}
