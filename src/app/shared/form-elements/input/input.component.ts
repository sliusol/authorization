import {
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit,
  AfterContentInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
  UntypedFormControl,
} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent
  implements ControlValueAccessor, OnInit
{
  @Input() name: string = '';
  @Input() type: string = '';

  public value: string | undefined;

  public onTouched = () => {};
  public onChange = (value: any) => {};

  public control: UntypedFormControl = new UntypedFormControl('');

  constructor(private injector: Injector) {}

  // ngAfterContentInit(): void {
  //   this.ngControl = this.injector.get(NgControl);
  // }

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
