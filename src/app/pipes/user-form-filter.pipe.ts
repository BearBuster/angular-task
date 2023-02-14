import { Pipe, PipeTransform } from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";

@Pipe({
  name: 'userFormFilter'
})
export class UserFormFilterPipe implements PipeTransform {
  transform(formArray: FormArray): FormArray {
    const filteredArray = formArray.getRawValue().filter(formGroup => (formGroup as FormGroup).controls['checked'].value === true);
    return new FormArray(filteredArray);
  }
}
