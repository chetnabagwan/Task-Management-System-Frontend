import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes:Routes=[
    {path:'',redirectTo:'auth/login',pathMatch:'full'},
    { path:'auth', loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule) },
    { path:'tasks', loadChildren:()=>import('./tasks/tasks.module').then((m)=>m.TasksModule)}]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutes { }