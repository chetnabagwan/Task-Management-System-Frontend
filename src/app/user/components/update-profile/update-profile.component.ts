import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserServiceService } from '../../user-service.service';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {

  UpdateProfileResponse:Subscription
 

  constructor(private userService:UserServiceService,
    private router:Router
  ){}

  OnSubmit(formData: NgForm) {
    this.UpdateProfileResponse = this.userService.updateProfile(formData.value).subscribe(() =>{ this.router.navigate(['/profile/my-profile'])});

  }

}
