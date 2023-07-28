import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-phones-control',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhonesControlComponent),
      multi: true
    }
  ],
  templateUrl: './phones-control.component.html',
  styleUrls: ['./phones-control.component.css']
})
export class PhonesControlComponent implements ControlValueAccessor{
  value: string ='';
  onChange: any = () => {};
  FormArrayName: any;

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched() {}

  getFormsControls() {
    return this.FormArrayName.controls;
  }

  addPhone(){
   this.onChange('+')
  }
  
  removePhone(index: number) {
    this.onChange('-', index);
  }
}
