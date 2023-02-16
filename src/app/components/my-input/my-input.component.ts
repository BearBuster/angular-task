import {Attribute, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {UtilsService} from "../../services/utils.service";

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
export class MyInputComponent implements ControlValueAccessor, OnInit{

  @Input() type: string
  @Input() subText: SubText
  @Input() value: any = ''
  @Input() isDisabled: boolean
  @Input() placeholder: string = ''
  @Input() readOnly: boolean = false
  @Input() warning: boolean = false
  @Input() exactValue: any
  pattern: string

  onChange = (value: any) => {}
  onTouched = () => {};

  constructor(public utilsService: UtilsService) {}

  writeValue(value: string): void {
    this.value = value
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  ngOnInit(): void {
  }

}
