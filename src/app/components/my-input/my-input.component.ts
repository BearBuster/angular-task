import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

interface SubText {
  text: string
  pos: "before" | "after"
}
@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyInputComponent),
      multi: true
    }
  ]
})
export class MyInputComponent implements ControlValueAccessor{

  @Input() type: string
  @Input() subText: SubText
  @Input() value: any

  onChange = (value: any) => {}
  onTouched = () => {};

  constructor() {}

  writeValue(value: string): void {
    this.value = value
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  isDisabled: boolean
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

}
