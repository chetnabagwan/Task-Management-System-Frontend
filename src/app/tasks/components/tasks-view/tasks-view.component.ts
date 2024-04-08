import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskServiceService } from '../../services/task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.css'
})
export class TasksViewComponent implements OnDestroy{

  my_tasks:Subscription;
  tasks:any[];
  

  constructor(private taskService:TaskServiceService,
    private router:Router){}
  
  ngOnInit(){
    // console.log("hello");
    this.my_tasks=this.taskService.getMyTasks().subscribe(
      (data)=>{
        this.tasks=data;
      }
      
    )
  }

  deleteTask(taskId:number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.router.navigate(['/tasks/mytasks']);
    })
    }


  ngOnDestroy(): void {
    if (this.my_tasks) {
      this.my_tasks.unsubscribe();
    }
  }


}
