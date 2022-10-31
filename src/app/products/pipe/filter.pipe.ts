import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filterstring:string,propname:string):any {

    const result:any=[]
    if(!value || filterstring=='' || propname==''){
      return value
    }

    value.forEach((item:any)=>{
      if(item[propname].trim().toLowerCase().includes(filterstring.toLocaleLowerCase())){
        result.push(item)
      }
    })
    return result
  }

}
