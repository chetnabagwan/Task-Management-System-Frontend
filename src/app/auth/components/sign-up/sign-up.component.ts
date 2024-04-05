import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {

  SignUpResponse:Subscription
  

  constructor(
    private router:Router,
    private authService:AuthService
  ){}

  onSubmit(formData:NgForm) {
    this.SignUpResponse = this.authService.signUp(formData.value).subscribe((responseData)=>{this.router.navigate(['/auth/login'])},
    (error) => {
      console.error('Signup Error:',error);
    });

  }
  ngOnDestroy(): void {
    if (this.SignUpResponse) {
      this.SignUpResponse.unsubscribe();
    }
  }
}
