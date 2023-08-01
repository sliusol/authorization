import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> InputComponent),
    multi:true
  }]
})
export class InputComponent implements ControlValueAccessor{
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
