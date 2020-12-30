import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './home/admin/admin.component';
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
  {path: 'admin', component: AdminComponent},
  {path: 'admin/users', component: UsersComponent},
  {path: 'admin/users/adduser', component: AdduserComponent},
  {path: 'admin/profil', component: ProfilComponent},
  {path: 'admin/profil/addprofil', component: AddprofilComponent},
  {path: 'admin/profilsortie', component: ProfilsortieComponent},
  {path: 'admin/groupecompetence', component: GroupecompetenceComponent },
  {path: 'admin/groupecompetence/addgroupecompetence', component: AddgroupecompetenceComponent },
  {path: 'admin/referentiels', component: ReferentielsComponent },
  {path: 'admin/addpromos', component: PromosComponent },
  {path: 'admin/competence', component: CompetenceComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
