import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskServiceService } from '../../services/task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-assigned-tasks',
  templateUrl: './view-assigned-tasks.component.html',
  styleUrl: './view-assigned-tasks.component.css'
})
export class ViewAssignedTasksComponent {
  assigned_tasks:Subscription;
  tasks: any[];

  constructor(private taskService:TaskServiceService,private router:Router){}

  ngOnInit(){
    this.assigned_tasks=this.taskService.getAssignedTasks().subscribe((data)=>{
      this.tasks = data;
    })
  }

  deleteTask(taskId:number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.router.navigate(['/tasks/mytasks']);
    })
    }
  
  ngOnDestroy(): void {
    if (this.assigned_tasks) {
      this.assigned_tasks.unsubscribe();
    }
  }

}
