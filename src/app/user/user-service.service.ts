import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../services/session-storage-service.service';

export type users={
  user_id:number;
  username:string;
  name:string;
  email:string;
  phone_number:number;
  gender:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient,private storageService:SessionStorageService) { }

  getAllUsers():Observable<any[]>{
    return this.http.get<users[]>('http://localhost:5000/v1/users',{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.storageService.getFromSessionStorage(
          'token'
        )}`,
      }),
    });
  }

  myProfile():Observable<any>{
    return this.http.get<users>('http://localhost:5000/v1/my-profile',{ headers: new HttpHeaders({
      Authorization: `Bearer ${this.storageService.getFromSessionStorage(
        'token'
      )}`,
    }),
  });
 }

 
}
