import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksViewComponent } from './components/tasks-view/tasks-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreateTasksComponent } from './components/create-tasks/create-tasks.component';
import { FormsModule } from '@angular/forms';
import { AssignTasksComponent } from './components/assign-tasks/assign-tasks.component';
import { ViewAssignedTasksComponent } from './components/view-assigned-tasks/view-assigned-tasks.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { isLoggedInGuard } from '../guards/isLoggedIn.guard';
import { onlyUserGuard } from '../guards/user-role.guard';
import { onlyManagerGuard } from '../guards/manager-role.guard';

const taskRoutes:Routes=[
  {path:'mytasks', component:TasksViewComponent, canActivate:[isLoggedInGuard,onlyUserGuard]},
  {path:'createtasks', component:CreateTasksComponent, canActivate:[isLoggedInGuard,onlyUserGuard]},
  {path:'assigntasks',component:AssignTasksComponent, canActivate:[isLoggedInGuard,onlyManagerGuard]},
  {path:'taskstatus',component:ViewAssignedTasksComponent, canActivate:[isLoggedInGuard,onlyManagerGuard]},
  {path:'edit',component:UpdateTaskComponent, canActivate:[isLoggedInGuard,onlyUserGuard,onlyManagerGuard]}
]

@NgModule({
  declarations: [
    TasksViewComponent,
    CreateTasksComponent,
    AssignTasksComponent,
    ViewAssignedTasksComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(taskRoutes),
    HttpClientModule
  ]
})
export class TasksModule { }
