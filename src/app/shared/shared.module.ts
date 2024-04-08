import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardComponent } from './components/navbar/profile/profile-card/profile-card.component';
import { UpdateProfileComponent } from '../user/components/update-profile/update-profile.component';
import { MyprofileComponent } from '../user/components/myprofile/myprofile.component';
import { ProfileComponent } from './components/navbar/profile/profile.component';
import { isLoggedInGuard } from '../guards/isLoggedIn.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const profileRoutes:Routes=[
  {path:'profile', component:ProfileCardComponent, canActivate:[isLoggedInGuard]},
  {path:'profile/my-profile',component:MyprofileComponent, canActivate:[isLoggedInGuard]},
  {path:'profile/update-profile',component:UpdateProfileComponent, canActivate:[isLoggedInGuard]}
]

@NgModule({
  declarations: [
    NavbarComponent,
    ProfileCardComponent,
    ProfileComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ],
  exports:[NavbarComponent,RouterModule]
})
export class SharedModule { }
