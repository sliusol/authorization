import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { FirstNameControlComponent } from './authcomponent/cva/first-name-control/first-name-control.component';
import { LastNameControlComponent } from './authcomponent/cva/last-name-control/last-name-control.component';
import { EmailControlComponent } from './authcomponent/cva/email-control/email-control.component';
import { PasswordControlComponent } from './authcomponent/cva/password-control/password-control.component';
import { PhonesControlComponent } from './authcomponent/cva/phones-control/phones-control.component';
import { CountryControlComponent } from './authcomponent/cva/country-control/country-control.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthcomponentComponent,
    FirstNameControlComponent,
    LastNameControlComponent,
    EmailControlComponent,
    PasswordControlComponent,
    PhonesControlComponent,
    CountryControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
