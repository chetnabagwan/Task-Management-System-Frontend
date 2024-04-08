import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  isLoggedIn: boolean;
  
  constructor(private router:Router){}
  
  logout(): void {
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['auth/login']);
  }

}
