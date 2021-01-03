import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../Model/users';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public  user: User =  new User();
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(credentials: NgForm): any{
    this.loginService.login(credentials).subscribe(
      response => {
        this.loginService.saveToken('token', response.token);
        const tokendecode = this.loginService.decodeToken(response.token);
        const role = this.loginService.getRole(tokendecode);
        this.loginService.redirection(role);
      },
      error => {
        return error;
      }
    );
  }
}
