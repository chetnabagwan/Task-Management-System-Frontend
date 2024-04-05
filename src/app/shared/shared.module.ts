import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './components/navbar/profile/profile.component';
import { ProfileCardComponent } from './components/navbar/profile/profile-card/profile-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProfileComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
