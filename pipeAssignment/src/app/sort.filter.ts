import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFilter'
})

export class SortFilter implements PipeTransform{
  transform(value: any): any{
    if (value.length === 0){
      return value;
    }else{
      return value.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
}
