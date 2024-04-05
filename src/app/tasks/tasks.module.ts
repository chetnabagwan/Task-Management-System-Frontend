import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksViewComponent } from './components/tasks-view/tasks-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreateTasksComponent } from './components/create-tasks/create-tasks.component';
import { FormsModule } from '@angular/forms';
import { AssignTasksComponent } from './components/assign-tasks/assign-tasks.component';

const taskRoutes:Routes=[
  {path:'mytasks', component:TasksViewComponent},
  {path:'createtasks', component:CreateTasksComponent}
]
@NgModule({
  declarations: [
    TasksViewComponent,
    CreateTasksComponent,
    AssignTasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(taskRoutes),
    HttpClientModule
  ],
  exports:[RouterModule]
})
export class TasksModule { }
