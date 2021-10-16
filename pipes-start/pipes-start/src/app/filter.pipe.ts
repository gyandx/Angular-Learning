import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
  // pure: false
  /* if we want some new things in pipe the pipe got updated but data is not shown in dom, after filter clear data is visible
  but if we add pure: false the data will be visible at the same time as it render the pipe in every change but leads to performance hamper*/
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, props: string): any {
    if (value.length === 0 || filterString.toLowerCase() === ''){
      return value;
    }

    const filterArr = [];
    for(const eachValue of value){
      if (eachValue[props] === filterString.toLowerCase()){
        filterArr.push(eachValue);
      }
    }
    return filterArr;
  }

}
