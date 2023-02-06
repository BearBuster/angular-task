import { Pipe, PipeTransform } from '@angular/core';
import {IGroupe} from "../interfaces/igroupe";

@Pipe({
  name: 'groupListFilter'
})
export class GroupListFilterPipe implements PipeTransform {

  transform(value: IGroupe[], filterString: string): IGroupe[] {

    return value.filter(e=>{
      return e.groupName.toLowerCase().includes(filterString.toLowerCase())
    });
  }

}
