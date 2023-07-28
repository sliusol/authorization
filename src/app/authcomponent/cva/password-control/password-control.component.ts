import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-control',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordControlComponent),
      multi: true
    }
  ],
  templateUrl: './password-control.component.html',
  styleUrls: ['./password-control.component.css']
})
export class PasswordControlComponent implements ControlValueAccessor{
  value: string ='';
  showPassword: boolean = false;
  onChange: any = () => {};

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched() {}

  togglePasswordVisibility(){this.showPassword = !this.showPassword;}
}
