import { Component, OnDestroy } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrl: './create-tasks.component.css'
})
export class CreateTasksComponent implements OnDestroy{
  
  createTaskResponse:Subscription;
  
  constructor(private taskService:TaskServiceService,
    private router:Router){

  }
  
  onSubmit(taskDetails:NgForm) {
    this.createTaskResponse = this.taskService.createTask(taskDetails.value).subscribe((responseData)=>{
      console.log(responseData);
    });

  }

  ngOnDestroy(): void {
    if (this.createTaskResponse) {
      this.createTaskResponse.unsubscribe();
    }
  }
}
