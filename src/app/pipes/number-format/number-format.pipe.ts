import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) {
      return '';
    }

    // Asegúrate de que el valor es un número
    value = parseFloat(value);
    
    // Formatea el número con separadores de miles
    return value.toLocaleString('es-CO', { minimumFractionDigits: 0 });
  }
}
