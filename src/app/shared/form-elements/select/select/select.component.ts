import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> SelectComponent),
    multi:true
  }]
})
export class SelectComponent implements ControlValueAccessor{
  public value: string | undefined;
  public changed: ((value: string) => void) | undefined;
  public touched: (() => void) | undefined;

  
  constructor(){}

  public writeValue(value: string): void {
    this.value = value;
  }
  public registerOnChange(fn: any): void {
    this.changed = fn;
  }
  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }
}
