import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, UntypedFormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/shared/services/country-service/country.service';



@UntilDestroy()
@Component({
  selector: 'app-select',
  template: `<label class="label">{{ name }}</label>
  <select class="select" [formControl]="control">
    <option *ngFor="let country of countries$ | async" [value]="country">{{ country }}</option> 
  </select>`,
  styleUrls: ['./select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> SelectComponent),
    multi:true
  }, [CountryService]]
})
export class SelectComponent implements ControlValueAccessor, OnInit{
  @Input() name: string='';
  
  public value: string | undefined;
  public countries$:Observable<string[]>;
  
  public onTouched = () => {};
  public onChange = (value: any) => {};
  
  public control: UntypedFormControl;
  

  constructor(private injector: Injector, public countryService: CountryService){
    this.control = new UntypedFormControl();
  }

  public ngOnInit(): void {
    this.countries$=this.countryService.getCountries()
    
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

