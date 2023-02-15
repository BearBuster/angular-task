import {AfterViewInit, Attribute, Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: ['./toggle-slider.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSliderComponent),
      multi: true
    }
  ],
  animations: [
    trigger('toggleTrigger', [
      state('off', style({ transform: 'translateX(0%)' })),
      state('on', style({ transform: 'translateX(130%)' })),
      transition('on <=> off', animate('120ms ease-in-out'))
    ])
  ]
})
export class ToggleSliderComponent implements ControlValueAccessor {

  toggleOn:boolean;
  disabled:boolean;
  onChange = (toggleOn: boolean) => {}

  constructor() {}

  registerOnChange(fn: (toggleOn: boolean) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    console.log(this.toggleOn)
    console.log(this.disabled)
    this.disabled = isDisabled
  }

  writeValue(toggleOn: boolean): void {
    this.toggleOn = toggleOn
  }

  toggleClick(): void {
    if (!this.disabled) {
      this.toggleOn = !this.toggleOn;
      this.onChange(this.toggleOn)
    }
  }

}
