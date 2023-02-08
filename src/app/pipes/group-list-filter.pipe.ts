import { Pipe, PipeTransform } from '@angular/core';
import {Group} from "../interfaces/Group";

@Pipe({
  name: 'groupListFilter'
})
export class GroupListFilterPipe implements PipeTransform {

  transform(groups: Group[], filterString: string): Group[] {

    return groups.filter(group=>{
      return group.groupName.toLowerCase().includes(filterString.toLowerCase())
    });
  }

}
