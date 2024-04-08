import { Component } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {
  
  UpdateTaskResponse:Subscription

  constructor(private taskService:TaskServiceService,
    private router:Router){}

  OnSubmit(formData:NgForm){
    this.UpdateTaskResponse = this.taskService.updateTask(formData.value).subscribe(()=> {this.router.navigate(['/tasks/mytasks'])})
  }
 


}
