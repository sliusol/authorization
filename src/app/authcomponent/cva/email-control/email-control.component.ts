import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-email-control',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailControlComponent),
      multi: true
    }
  ],
  templateUrl: './email-control.component.html',
  styleUrls: ['./email-control.component.css']
})
export class EmailControlComponent implements ControlValueAccessor
{
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
