import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthcomponentComponent } from './authcomponent.component';
import { InputComponent } from '../shared/form-elements/input/input.component';
import { SelectComponent } from '../shared/form-elements/select/select/select.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AuthcomponentComponent,
    SelectComponent,
    InputComponent,],
  imports: [
    CommonModule, BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
    exports: [AuthcomponentComponent]
  
})
export class AuthModule { }
