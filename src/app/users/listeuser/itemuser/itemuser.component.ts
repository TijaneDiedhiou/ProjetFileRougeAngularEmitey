import { Component, OnInit } from '@angular/core';
import {User} from '../../../Model/users';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-itemuser',
  templateUrl: './itemuser.component.html',
  styleUrls: ['./itemuser.component.scss']
})
export class ItemuserComponent implements OnInit {
  users: User[] = [];
  constructor( private userService: UserService) { }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): any{
     this.userService.getUsers()
      .subscribe(
        response => {
          this.users = response;
        }
      );
}
}
