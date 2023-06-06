export function extractNumberFromCurrency(currencyString: string): number {
  const numericString = currencyString.replace(/[^\d.,]/g, '').replace(',', '.');
  return parseFloat(numericString);
}
export function formatCurrency(value: string): string {
  // Remove todos os caracteres não numéricos
  const numericValue = value.replace(/\D/g, '');

  // Verifica se o valor é vazio
  if (numericValue.length === 0) {
    return '';
  }

  // Formata o valor com a máscara de moeda
  const formattedValue = applyCurrencyMask(numericValue);
  return `R$ ${formattedValue}`;
}

export function applyCurrencyMask(value: string): string {
  let formattedValue = '';
  const digits = value.split('').reverse();

  for (let i = 0; i < digits.length; i++) {
    if (i === 2) {
      formattedValue = ',' + formattedValue;
    } else if (i === 5) {
      formattedValue = '.' + formattedValue;
    }
    formattedValue = digits[i] + formattedValue;
  }

  return formattedValue;
}
