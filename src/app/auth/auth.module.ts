import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import {Routes} from "@angular/router";
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const authRoutes:Routes=[
  { path:'signup', component:SignUpComponent},
  { path:'login', component:LoginComponent}]

@NgModule({
  declarations: [
    LoginComponent,SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes)
  ],
  exports:[RouterModule]
})
export class AuthModule { 

}
