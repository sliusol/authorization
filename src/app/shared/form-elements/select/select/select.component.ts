import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  UntypedFormControl,
} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  @Input() name: string = '';
  @Input() countries$: Observable<string[]>;

  public value: string | undefined;

  public onTouched = () => {};
  public onChange = (value: any) => {};

  public control: UntypedFormControl;

  constructor(private injector: Injector) {
    this.control = new UntypedFormControl();
  }

  public ngOnInit(): void {
    this.control.markAsTouched = function (): void {};

    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      this.onChange(value);
    });
  }

  public writeValue(obj: any): void {
    this.control?.setValue(obj);
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
