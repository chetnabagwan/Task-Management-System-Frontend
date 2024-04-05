import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth-service.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SessionStorageService } from '../../../services/session-storage-service.service';
import { JWTService } from '../../../services/jwt-token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy{

  loginResponse : Subscription;
  
  
  constructor(
    private authService:AuthService,
    private sessionService:SessionStorageService,
    private jwtService:JWTService,
    private router:Router){}

  onSubmit(formData: NgForm) {
    console.log(formData.value);
    this.loginResponse = this.authService
      .login(formData.value)
      .subscribe(
        (responseData) => {
          console.log(responseData);
          const jwt = responseData.access_token;
          // console.log(jwt);
          const role = this.jwtService.getRoleFromToken(jwt);
          // console.log(role);
          const user_id = this.jwtService.getUserIdFromToken(jwt);
          this.sessionService.setSessionStorage('token', jwt);
          this.sessionService.setSessionStorage('role', role);
          this.sessionService.setSessionStorage('user_id', user_id);

          this.authService.successLogin.next(true);

  
          this.router.navigate(['/tasks']);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }
  
  ngOnDestroy(): void {
    if (this.loginResponse) {
      this.loginResponse.unsubscribe();
    }
  }
  
}
