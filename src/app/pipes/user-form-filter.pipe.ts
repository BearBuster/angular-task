import { Pipe, PipeTransform } from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";

@Pipe({
  name: 'userFormFilter'
})
export class UserFormFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string | boolean): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }

    if(typeof value == 'boolean'){
      console.log(items.filter(singleItem => singleItem.value[field] == true))
      return items.filter(singleItem => singleItem.value[field] == value);
    }else if(typeof value == 'string'){
      return items.filter(singleItem => singleItem.value[field].toLowerCase().includes(value.toLowerCase()));
    }
    return null
  }
}
