import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date | undefined): string {
    if (!value) return '';
    const datePipe = new DatePipe('en-US');
    const transformedDate = datePipe.transform(value, 'dd/MM/yyyy');
    return transformedDate || '';
  }
}
