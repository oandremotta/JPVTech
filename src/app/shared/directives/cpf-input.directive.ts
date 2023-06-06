import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cpfFormat]'
})
export class CpfInputDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    // Remove todos os caracteres não numéricos
    const cpf = value.replace(/\D/g, '');

    // Formata o CPF: XXX.XXX.XXX-XX
    let formattedCpf = '';
    for (let i = 0; i < cpf.length; i++) {
      if (i === 3 || i === 6) {
        formattedCpf += '.';
      } else if (i === 9) {
        formattedCpf += '-';
      }
      formattedCpf += cpf[i];
    }

    // Atualiza o valor no campo de input
    this.el.nativeElement.value = formattedCpf;
  }
}
