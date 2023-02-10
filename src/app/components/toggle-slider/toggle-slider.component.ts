import {Attribute, Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: ['./toggle-slider.component.css']
})
export class ToggleSliderComponent{

  @Input() value: boolean
  @Output() toggle = new EventEmitter<boolean>()
  constructor() {}


}
