import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from '../../services/session-storage-service.service';
import { Observable } from 'rxjs';
import { createTaskDetails } from '../../models/create-task.model';
import { MyTasks } from '../../models/view-task.model';
import { assignTaskDetails } from '../../models/assign-task.model';

export type my_tasks={
  task_id:number,
  user_id:number,
  task_name:string,
  task_desc:string,
  date_created:Date,
  due_date:Date,
  is_completed:number,
  category:string,
  assigned_by:number
}

export type assigned_tasks = {
  task_id:number,
  user_id:number,
  task_name:string,
  task_desc:string,
  date_created:Date,
  due_date:Date,
  is_completed:number
}


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http:HttpClient,
    private storageService: SessionStorageService
    ) { }

  getMyTasks(): Observable<any[]>{
    return this.http.get<my_tasks[]>('http://localhost:5000/v1/mytasks',  {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.storageService.getFromSessionStorage(
          'token'
        )}`,
      }),
    });

  }

  createTask(
    taskDetails:createTaskDetails): Observable<any>{
    return this.http.post('http://localhost:5000/v1/create-tasks',taskDetails,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.storageService.getFromSessionStorage(
          'token'
        )}`,
      }),
    });
  }

  assignTask(taskDetails:assignTaskDetails): Observable<any>{
    return this.http.post('http://localhost:5000/v1/assign-tasks',taskDetails,{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.storageService.getFromSessionStorage(
          'token'
        )}`,
      }),
    });
    
  }

  getAssignedTasks(): Observable<any[]>{
    return this.http.get<my_tasks[]>('http://localhost:5000/v1/assigned-task-status',  {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.storageService.getFromSessionStorage(
          'token'
        )}`,
      }),
    });
  }
  
  updateTask(){}

  deleteTask(){}
}
