import {
  AfterContentInit,
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
  UntypedFormControl,
} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { AuthErrors } from 'src/app/authcomponent/constants/auth-form.errors';

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
export class SelectComponent
  implements ControlValueAccessor, OnInit, AfterContentInit
{
  @Input() name: string = '';
  @Input() countries$: Observable<string[]>;

  public value: string | undefined;

  public onTouched = () => {};
  public onChange = (value: any) => {};

  public control: UntypedFormControl = new UntypedFormControl('');

  public ngControl: NgControl;

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
