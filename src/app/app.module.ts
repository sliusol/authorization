import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { InputComponent } from './shared/form-elements/input/input.component';
import { SelectComponent } from './shared/form-elements/select/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthcomponentComponent,
    SelectComponent,
    InputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
