import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GetallusersComponent } from './components/getallusers/getallusers.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { isLoggedInGuard } from '../guards/isLoggedIn.guard';
import { onlyManagerGuard } from '../guards/manager-role.guard';


const managerRoutes:Routes=[
  {path:'allusers', component:GetallusersComponent, canActivate:[isLoggedInGuard,onlyManagerGuard]}
]

@NgModule({
  declarations: [
  
    GetallusersComponent,
        MyprofileComponent,
        UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(managerRoutes),
    HttpClientModule
  ],
  exports:[UpdateProfileComponent,MyprofileComponent]
})
export class UserModule { }
