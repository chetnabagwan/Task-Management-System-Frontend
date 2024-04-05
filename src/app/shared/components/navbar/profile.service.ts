import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../../../services/session-storage-service.service';

export type MyProfile = {
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
export class ProfileService {

  constructor(private http: HttpClient,private storageService:SessionStorageService) { }

//   updateProfile(profile: Profile): Observable<any> {
//     // Implement update profile API request
//     return this.http.put<any>('your-api-url/profile', profile);
//   }

  getProfile(): Observable<MyProfile> {
    return this.http.get<MyProfile>('http://localhost:5000/v1/my-profile',{ headers: new HttpHeaders({
        Authorization: `Bearer ${this.storageService.getFromSessionStorage(
          'token'
        )}`,
      }),
    });
  }
}
