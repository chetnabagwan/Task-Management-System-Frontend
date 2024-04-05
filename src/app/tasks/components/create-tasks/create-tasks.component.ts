import { Component } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrl: './create-tasks.component.css'
})
export class CreateTasksComponent {
  constructor(private taskService:TaskServiceService,
    private router:Router){

  }
  onSubmit(taskDetails:NgForm) {
    // // Handle form submission, e.g., send data to a service
    // console.log('Task Name:', this.taskName);
    // console.log('Task Description:', this.taskDesc);
    // console.log('Date Created:', this.dateCreated);
    // console.log('Due Date:', this.dueDate);
    // console.log('Is Completed:', this.isCompleted);
    // console.log('Category:', this.category);
  }
}
