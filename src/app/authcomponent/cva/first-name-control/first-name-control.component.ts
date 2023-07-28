import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-first-name-control',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FirstNameControlComponent),
      multi: true
    }
  ],
  templateUrl: './first-name-control.component.html',
  styleUrls: ['./first-name-control.component.css']
})
export class FirstNameControlComponent implements ControlValueAccessor{
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

