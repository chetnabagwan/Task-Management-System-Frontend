import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../../auth/auth-service.service';
import { Subscription } from 'rxjs';
import { SessionStorageService } from '../../../services/session-storage-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy {
    role:string;
    isLoggedIn:boolean = false;
    nav:Subscription;
    constructor(private authService:AuthService,
      private sessionService:SessionStorageService){}
 
    getrole(){
      if(this.role == "manager"){
        return false;
      }
      else{
        return true;
      }
    }
    ngOnInit(){
      this.nav= this.authService.successLogin.subscribe((isLoggedIn)=>{
        this.isLoggedIn = isLoggedIn;
        console.log(isLoggedIn);
        this.role = this.sessionService.getFromSessionStorage('role');

      });
    }

    ngOnDestroy(): void {
      if (this.nav) {
        this.nav.unsubscribe();
      }
    }
}
