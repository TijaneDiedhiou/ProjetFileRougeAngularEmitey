import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 link = '/api';
  constructor(
    private http: HttpClient
  ) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.link}/admin/users`);
  }
  addUser(data): Observable<any>{
    return this.http.post<any>(`${this.link}/admin/users`, data);
  }
}



