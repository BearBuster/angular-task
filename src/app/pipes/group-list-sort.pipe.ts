import { Pipe, PipeTransform } from '@angular/core';
import { Group } from "../interfaces/Group";

@Pipe({
  name: 'groupListSort'
})
export class GroupListSortPipe implements PipeTransform {

  transform(groupList: Group[]): Group[] {
    return groupList.sort((groupA: Group, groupB: Group) => {
      if(!groupA.warning && groupB.warning) return 1
      if(groupA.warning && !groupB.warning) return -1
      return groupA.groupName.localeCompare(groupB.groupName)
    });
  }

}
