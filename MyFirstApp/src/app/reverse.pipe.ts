import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let reverseString:string = '';
    for (let index = 0; index < value.length; index++) {
      reverseString = value[index]+reverseString;
    }
    return reverseString;
  }

}
