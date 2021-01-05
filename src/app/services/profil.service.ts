import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profil} from '../Model/profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  link = '/api';
  constructor(
    private http: HttpClient
  ) { }

  getProfils(): Observable<Profil[]> {
    return this.http.get<Profil[]>(`${this.link}/admin/profils`);
  }
}

