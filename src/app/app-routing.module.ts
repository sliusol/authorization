import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';

const routes: Routes =[
  {path: '', component: AppComponent},
  {path: 'auth', component: AuthcomponentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
