import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/navbar/profile/profile.component';
import { ProfileCardComponent } from './components/navbar/profile/profile-card/profile-card.component';
import { UpdateProfileComponent } from '../user/components/update-profile/update-profile.component';

const profileRoutes:Routes=[
  {path:'profile', component:ProfileCardComponent},
  {path:'myProfile',component:ProfileComponent},
  {path:'updateProfile',component:UpdateProfileComponent}
]

@NgModule({
  declarations: [
    NavbarComponent,
    ProfileComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
