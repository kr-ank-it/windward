import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serviceUrl = 'http://localhost:8090/auth';
  constructor(private http: HttpClient) {
    // Initialization code can go here if needed
  }
  register(user:User): Observable<User> {
    return this.http.post<User>(this.serviceUrl+"/signup", user);
  }
  login(user: User): Observable<{token:String}> {
    return this.http.post<{token:String}>(this.serviceUrl + "/login", user);
  }
  validateToken(token:string):Observable<User>{
    // const token = localStorage.getItem('token');
    return this.http.get<User>(this.serviceUrl+"/validate"+"/" + token);
  }
}
