import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToTitle',
})
export class CamelCaseToTitlePipe implements PipeTransform {
  transform(value: string): unknown {
    const camelCase = value.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');

    let flat = '';

    camelCase.forEach((word) => {
      flat = flat + word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    });
    return flat.trim();
  }
}
