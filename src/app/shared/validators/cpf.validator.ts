import { FormControl } from '@angular/forms';

export const cpfValidator = function(control: FormControl) {
  const cpf = control.value;
  if (cpf && cpf !== '') {
    const validCpf = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;
    return validCpf.test(cpf) && isValidCpf(cpf) ? null : { cpfInvalid: true };
  }
  return null;
};

const isValidCpf = function(cpf: string) {
  cpf = cpf.replace(/[^\d]+/g, '');
  let numbers, sum, result;
  const digits = cpf.substring(9);
  let equalDigits = 1;

  if (cpf.length < 11) {
    return false;
  }

  for (let i = 0; i < cpf.length - 1; i++) {
    if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
      equalDigits = 0;
      break;
    }
  }

  if (!equalDigits) {
    numbers = cpf.substring(0, 9);
    sum = 0;
    for (let i = 10; i > 1; i--) {
      sum += Number(numbers.charAt(11 - i)) * i;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== Number(digits.charAt(0))) {
      return false;
    }

    numbers = cpf.substring(0, 10);
    sum = 0;
    for (let i = 11; i > 1; i--) {
      sum += Number(numbers.charAt(11 - i)) * i;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== Number(digits.charAt(1))) {
      return false;
    }

    return true;
  }
  return false;
};
