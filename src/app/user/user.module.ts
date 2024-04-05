import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GetallusersComponent } from './components/getallusers/getallusers.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';

const managerRoutes:Routes=[
  {path:'allusers', component:GetallusersComponent}
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
  ]
})
export class UserModule { }
