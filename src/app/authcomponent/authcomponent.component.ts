import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {of, Observable} from 'rxjs';
import { countries } from '../constants/countries.data';



@Component({
  selector: 'app-authcomponent',
  templateUrl: './authcomponent.component.html',
  styleUrls: ['./authcomponent.component.css']
})
export class AuthcomponentComponent implements OnInit{
  countries$!:Observable<string[]>;
  showPassword: boolean = false;
  submittedData: any;

  authForm: FormGroup;

  constructor(){
    this.authForm = new FormGroup(
      {
        "firstName": new FormControl("", Validators.required),
        "lastName": new FormControl("", Validators.required),
        "email": new FormControl("", [Validators.required, Validators.email]),
        "password": new FormControl("", [Validators.required,
        Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-zA-Z]).+$/)]),
        "phones": new FormArray([
          new FormControl("", [Validators.required, Validators.pattern(/^[0-9]+$/)])
        ]),
        "country": new FormControl("", Validators.required),
    }
    );
  }
  
  ngOnInit(): void {
   this.countries$=this.getCountries(); 
  }

  getCountries(){
    return of(countries)
  }

  getFormsControls():FormArray{
    return this.authForm.controls['phones'] as FormArray;
  }
  addPhone(){
    (<FormArray>this.authForm.controls['phones']).push(new FormControl('', Validators.required))
  }

  removePhone(index: number){
    if (index > 0) {
      (this.authForm.controls['phones'] as FormArray).removeAt(index);
    }
  }

  togglePasswordVisibility(){this.showPassword = !this.showPassword;}

  submit() {
    if (this.authForm.valid) {
      this.submittedData = this.authForm.value;
    }
    
  }
}
