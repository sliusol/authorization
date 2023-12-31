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
import { AuthErrors } from 'src/app/authcomponent/constants/auth-form.errors';

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
  implements ControlValueAccessor, OnInit, AfterContentInit
{
  @Input() name: string = '';
  @Input() type: string = '';

  public value: string | undefined;

  public onTouched = () => {};
  public onChange = (value: any) => {};
  public ngControl: NgControl;

  public control: UntypedFormControl = new UntypedFormControl('');
  public currentErrors: any = AuthErrors;
  public errorMessageKey: string = '';
  public AuthErrors = AuthErrors;

  constructor(private injector: Injector) {}

  ngAfterContentInit(): void {
    this.ngControl = this.injector.get(NgControl);
    this.ngControl.control?.statusChanges.subscribe(() => {
      this.currentErrors = this.ngControl?.control?.errors;
      if (this.currentErrors) {
        this.errorMessageKey = Object.keys(this.currentErrors)[0];
      }
    });
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
