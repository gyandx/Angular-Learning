import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {

  transform(value: string): any {
    if (value.length){
      value = this.sortData(value);
      return value;
    }else{
      return value;
    }
  }

  sortData(value){
    let instance = value.split('');
    instance = instance.reverse();
    return instance.join('')
  }

}
