import {Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';

const route: Routes = [
  {path:'home',component:HomeComponent},
  {path:'service',component:ServiceComponent},
  {path:'join us',component:JoinComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
