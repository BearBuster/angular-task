import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-user-checkbox',
  templateUrl: './user-checkbox.component.html',
  styleUrls: ['./user-checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserCheckboxComponent),
      multi: true
    }
  ]
})
export class UserCheckboxComponent implements ControlValueAccessor{

  @Input() isDisable: boolean
  @Input() fullName: string
  @Input() initial: string
  value: boolean
  onChange = (value: boolean) => {}
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisable = isDisabled
  }

  writeValue(value: boolean): void {
    this.value = value
  }

  registerOnTouched(fn: any): void {

  }
}
