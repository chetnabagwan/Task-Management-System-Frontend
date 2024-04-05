import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-getallusers',
  templateUrl: './getallusers.component.html',
  styleUrl: './getallusers.component.css'
})
export class GetallusersComponent {
  all_users:Subscription;
  users:any[];
  

  constructor(private userService:UserServiceService){}
  
  ngOnInit(){
    this.all_users=this.userService.getAllUsers().subscribe(
      (data)=>{
        this.users = data;
      }
    )
    
  }
  ngOnDestroy(): void {
    if(this.all_users){
      this.all_users.unsubscribe();
    }
  }

}
