import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskServiceService } from '../../services/task-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assign-tasks',
  templateUrl: './assign-tasks.component.html',
  styleUrl: './assign-tasks.component.css'
})
export class AssignTasksComponent implements OnDestroy{

  assignTaskResponse:Subscription;

  constructor(private taskService:TaskServiceService){}
  
  onSubmit(taskDetails:NgForm) {
    this.assignTaskResponse = this.taskService.assignTask(taskDetails.value).subscribe((responseData)=>{
      console.log(responseData);
    });
  
  }
  ngOnDestroy(): void {
    if (this.assignTaskResponse) {
      this.assignTaskResponse.unsubscribe();
    }
  }

}
