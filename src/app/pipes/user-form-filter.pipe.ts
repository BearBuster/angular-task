import { Pipe, PipeTransform } from '@angular/core';
import {Group} from "../interfaces/Group";
import {FormArray, FormControl} from "@angular/forms";

@Pipe({
  name: 'userFormFilter'
})
export class UserFormFilterPipe implements PipeTransform {

  transform(userFormArray: FormArray, filterString: string): Group[] {
    return userFormArray.value.users.filter((user: any)=>{
      return user.fullName.toLowerCase().includes(filterString.toLowerCase())
    });
  }

}
