import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { formatCurrency } from '../utils/currency-utils'; // Import the formatCurrency and extractNumberFromCurrency functions

@Directive({
  selector: '[appCurrencyInput]',
})
export class CurrencyInputDirective {
  constructor(private el: ElementRef, private control: NgControl) { }

  @HostListener('input')
  onInput() {
    const value = this.el.nativeElement.value;
    const formattedValue = formatCurrency(value);
    this.control?.control?.setValue(formattedValue, { emitEvent: false, emitModelToViewChange: true });
  }
}
