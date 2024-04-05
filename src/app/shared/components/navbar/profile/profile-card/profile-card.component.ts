import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  my_profile:Subscription;
  

  myProfile(){

  }

  logout() {
  throw new Error('Method not implemented.');
  }


}
