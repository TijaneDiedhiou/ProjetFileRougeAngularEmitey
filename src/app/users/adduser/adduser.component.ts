import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient,
              private userService: UserService) {
  }
  initForm(): void{
    this.uploadForm = this.formBuilder.group(
      {
        prenom: ['', Validators.required],
        nom: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required],
        profil: ['', Validators.required],
        avatar: new FormControl()
      }
    );
  }
  ngOnInit(): void {
    this.initForm();
  }

onFileSelect(event): any {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('avatar').setValue(file);
    }
  }
onSubmit(): any {
    const user = new FormData();
    console.log(this.uploadForm.value.profil);
    user.append('avatar', this.uploadForm.value.avatar);
    user.append('nom', this.uploadForm.value.nom);
    user.append('prenom', this.uploadForm.value.prenom);
    user.append('email', this.uploadForm.value.email);
    user.append('password', this.uploadForm.value.password);
    user.append('profil', this.uploadForm.value.profil);
    console.log(user);
   // return false;
    this.userService.addUser(user).subscribe(
      response => {
        console.log('ok');
      },
      error => {
        console.log('error');
      }
    );
  }
}






