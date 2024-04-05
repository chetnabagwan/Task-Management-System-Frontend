import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-view-assigned-tasks',
  templateUrl: './view-assigned-tasks.component.html',
  styleUrl: './view-assigned-tasks.component.css'
})
export class ViewAssignedTasksComponent {
  assigned_tasks:Subscription;
  tasks: any[];

  constructor(private taskService:TaskServiceService){}

  ngOnInit(){
    this.assigned_tasks=this.taskService.getAssignedTasks().subscribe((data)=>{
      this.tasks = data;
    })
  }

  ngOnDestroy(): void {
    if (this.assigned_tasks) {
      this.assigned_tasks.unsubscribe();
    }
  }

}
