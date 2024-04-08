import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const appRoutes:Routes=[
    {path:'',redirectTo:'auth/login',pathMatch:'full'},
    { path:'auth', loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule) },
    { path:'tasks', loadChildren:()=>import('./tasks/tasks.module').then((m)=>m.TasksModule)},
    {path:'manager', loadChildren:()=>import('./user/user.module').then((m)=>m.UserModule)},
    {path:'profile', loadChildren:()=>import('./shared/shared.module').then((m)=>m.SharedModule)},
    {path:'**',component:NotFoundComponent}]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutes { }