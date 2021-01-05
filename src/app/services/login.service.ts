import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  link = ' http://127.0.0.1:8000/api/login_check';
  constructor(
    private http: HttpClient,
    private route: Router,
  ) { }
  public login(credentials): any{
    return this.http.post(this.link, credentials);
  }
  public decodeToken(token): string{
    return jwt_decode(token);
  }
  public saveToken(tokenkey: string, tokenvalue: string): any{
    localStorage.removeItem('auth-token');
    localStorage.setItem('auth-token', tokenvalue);
  }
  getRole(token): string{
    return token.roles[0];
  }
  redirection(role): any{
    switch (role){
      case 'ROLE_ADMIN': {
        this.route.navigate(['admin/users']);
        break;
      }
      case 'ROLE_APPRENANT': {
        this.route.navigate(['apprenant']);
        break;
      }
      case 'ROLE_CM': {
        this.route.navigate(['cm']);
        break;
      }
      case 'ROLE_FORMATEUR': {
        this.route.navigate(['formateur']);
        break;
      }
      default: {
        this.route.navigate(['login']);
      }
    }
  }
}
