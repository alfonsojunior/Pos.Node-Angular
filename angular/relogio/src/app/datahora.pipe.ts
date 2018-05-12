import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datahora'
})
export class DatahoraPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toLocaleDateString() + ' ' + value.toLocaleTimeString();
  }

}
