import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { HomeComponent } from './home/home.component';


const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthcomponentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
