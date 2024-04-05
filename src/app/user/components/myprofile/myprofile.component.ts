import { Component, OnDestroy } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent implements OnDestroy {
  my_profile:Subscription;
  user: any;

  constructor(private userService:UserServiceService){}

  ngOnInit(){
    this.my_profile = this.userService.myProfile().subscribe((data)=>{
      this.user= data;
    })
  }
  ngOnDestroy(): void {
    if (this.my_profile) {
      this.my_profile.unsubscribe();
    }
  }

}
