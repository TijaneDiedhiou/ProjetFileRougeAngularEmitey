import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {UsersComponent} from './users/users.component';
import {AdduserComponent} from './users/adduser/adduser.component';
import {ProfilComponent} from './profil/profil.component';
import {AddprofilComponent} from './profil/addprofil/addprofil.component';
import {ProfilsortieComponent} from './profilsortie/profilsortie.component';
import {GroupecompetenceComponent} from './groupecompetence/groupecompetence.component';
import {AddgroupecompetenceComponent} from './groupecompetence/addgroupecompetence/addgroupecompetence.component';
import {CompetenceComponent} from './competence/competence.component';
import {ReferentielsComponent} from './referentiels/referentiels.component';
import {PromosComponent} from './promos/promos.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent,  children: [
      {path: '', redirectTo: '/admin/users', pathMatch: 'full'},
      {path: 'profil', component: ProfilComponent},
      {path: 'users', component: UsersComponent },
      {path: 'users/adduser', component: AdduserComponent},

      {path: 'profil/addprofil', component: AddprofilComponent},
      {path: 'profilsortie', component: ProfilsortieComponent},
      {path: 'groupecompetence', component: GroupecompetenceComponent },
      {path: 'groupecompetence/addgroupecompetence', component: AddgroupecompetenceComponent },
      {path: 'referentiels', component: ReferentielsComponent },
      {path: 'addpromos', component: PromosComponent },
      {path: 'competence', component: CompetenceComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
