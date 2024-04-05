import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginDetails } from '../models/login.model';
import { SignUpDetails } from '../models/sign-up.model';

type LoginResponseData={
  message:string,
  access_token:string,
  refresh_token:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  successLogin = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  signUp(signUpDetails:SignUpDetails):Observable<any>{
    return this.http.post<LoginResponseData>('http://localhost:5000/v1/register',signUpDetails);
  }
  
  login(
    loginCredentials:LoginDetails): Observable<any>{
    return this.http.post('http://localhost:5000/v1/login',loginCredentials);
  }

  logout(){}
}
