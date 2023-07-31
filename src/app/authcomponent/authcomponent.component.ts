import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {of, Observable} from 'rxjs';
import { CountryService } from '../country.service';



@Component({
  selector: 'app-authcomponent',
  templateUrl: './authcomponent.component.html',
  styleUrls: ['./authcomponent.component.css'],
  providers: [CountryService]
})
export class AuthcomponentComponent implements OnInit{
  public countries$!:Observable<string[]>;
  public showPassword: boolean = false;
  public submittedData: any;

  public authForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private countryService: CountryService){
    this.authForm = this.fb.group({
      "firstName": ["", Validators.required],
      "lastName": ["", Validators.required],
      "email": ["", [Validators.required, Validators.email, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/)]],
      "password": ["", [Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-zA-Z]).+$/)]],
      "phones": this.fb.array ([this.fb.control("", [Validators.required, Validators.pattern(/^[0-9]+$/)])]),
      "country": ["", Validators.required],
    });
  }
  
  public ngOnInit(): void {
    this.countries$=this.countryService.getCountries(); 
  }

  public  getFormsControls(): FormArray {
    return this.authForm.controls['phones'] as FormArray;
  }
  public  addPhone(): void {
    this.getFormsControls().push(new FormControl('', Validators.required))
  }

  public removePhone(index: number): void {
    if (index > 0) {
      this.getFormsControls().removeAt(index);
    }
  }

  public togglePasswordVisibility(): void {this.showPassword = !this.showPassword;}

  public submit():void {
    if (this.authForm.valid) {
      this.submittedData = this.authForm.value;
    }
    
  }
}
