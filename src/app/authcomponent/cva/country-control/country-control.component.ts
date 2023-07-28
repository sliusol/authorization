import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { countries } from 'src/app/constants/countries.data';


@Component({
  selector: 'app-country-control',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryControlComponent),
      multi: true
    }
  ],
  templateUrl: './country-control.component.html',
  styleUrls: ['./country-control.component.css']
})
export class CountryControlComponent implements ControlValueAccessor{
  value: string ='';
  countries$: Observable<string[]> | undefined;
  onChange: any = () => {};
  

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched() {}

}
