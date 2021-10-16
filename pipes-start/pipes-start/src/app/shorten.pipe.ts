import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})

/* custom pipe we have to use 3 things Pipe decorator, PipeTransform and transform method with takes a value as argument and
 return something, we can pass multiple args in transform method and limit is one of them(where the user can pass the limit value)*/
export class Shorten implements PipeTransform{
  // transform(value: any){
  //   if (value.length > 10){
  //     return value.substr(0, 10) + ' ...';
  //   }else{
  //     return value;
  //   }
  // }

  // passing multiple args to transform method
  transform(value: any, limit: number){
    if (value.length > limit){
      return value.substr(0, limit) + ' ...';
    }else{
      return value;
    }
  }
}
