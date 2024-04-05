import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskServiceService } from '../../services/task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.css'
})
export class TasksViewComponent {
  my_tasks:Subscription;
  tasks:any[];
  

  constructor(private taskService:TaskServiceService,
    private router:Router){}
  
  ngOnInit(){
    this.my_tasks=this.taskService.getMyTasks().subscribe(
      (data)=>{
        this.tasks=data;
      }
    )
  }

}
