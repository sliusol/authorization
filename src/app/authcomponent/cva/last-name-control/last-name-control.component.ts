import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-last-name-control',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LastNameControlComponent),
      multi: true
    }
  ],
  templateUrl: './last-name-control.component.html',
  styleUrls: ['./last-name-control.component.css']
})
export class LastNameControlComponent implements ControlValueAccessor{
  value: string ='';
  onChange: any = () => {};

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched() {}

}
