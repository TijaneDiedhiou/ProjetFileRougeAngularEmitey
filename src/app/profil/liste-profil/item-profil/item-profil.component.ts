import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../../services/profil.service';
import {Profil} from '../../../Model/profil';

@Component({
  selector: 'app-item-profil',
  templateUrl: './item-profil.component.html',
  styleUrls: ['./item-profil.component.scss']
})
export class ItemProfilComponent implements OnInit {
  profil: Profil[] = [];
  constructor(private profilService: ProfilService) { }
  ngOnInit(): void {
 }
  getUsers(): any{
    this.profilService.getProfils()
      .subscribe(
        (response) => {
          this.profil = response;
        }
      );
  }
}
