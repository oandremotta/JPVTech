import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) return '';
    // Remove caracteres não numéricos
    const cpf = value.replace(/\D/g, '');

    // Verifica se o CPF é válido
    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return value;

    // Formata o CPF: XXX.XXX.XXX-XX
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
