import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { FormateurComponent } from './formateur/formateur.component';
import { CmComponent } from './cm/cm.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfilComponent } from './profil/profil.component';
import { DetailProfilComponent } from './profil/detail-profil/detail-profil.component';
import { ListeProfilComponent } from './profil/liste-profil/liste-profil.component';
import {ItemProfilComponent} from './profil/liste-profil/item-profil/item-profil.component';
import { UsersComponent } from './users/users.component';
import { ListeuserComponent } from './users/listeuser/listeuser.component';
import { ItemuserComponent } from './users/listeuser/itemuser/itemuser.component';
import { DetailuserComponent } from './users/detailuser/detailuser.component';
import { CompetenceComponent } from './competence/competence.component';
import { DetailcompetenceComponent } from './competence/detailcompetence/detailcompetence.component';
import { ListecompetenceComponent } from './competence/listecompetence/listecompetence.component';
import { ItemcompetenceComponent } from './competence/listecompetence/itemcompetence/itemcompetence.component';
import { GroupecompetenceComponent } from './groupecompetence/groupecompetence.component';
import { ListegroupecompetenceComponent } from './groupecompetence/listegroupecompetence/listegroupecompetence.component';
import { DetailgroupecompetenceComponent } from './groupecompetence/detailgroupecompetence/detailgroupecompetence.component';
import { ReferentielsComponent } from './referentiels/referentiels.component';
import { DetailreferentielsComponent } from './referentiels/detailreferentiels/detailreferentiels.component';
import { ListereferentielComponent } from './referentiels/listereferentiel/listereferentiel.component';
import { ItemreferentielComponent } from './referentiels/listereferentiel/itemreferentiel/itemreferentiel.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { AddprofilComponent } from './profil/addprofil/addprofil.component';
import { ProfilsortieComponent } from './profilsortie/profilsortie.component';
import { DetailprofilsortieComponent } from './profilsortie/detailprofilsortie/detailprofilsortie.component';
import {ListeprofilsortieComponent} from './profilsortie/listeprofilsortie/listeprofilsortie.component';
import {ItemprofilsortieComponent} from './profilsortie/listeprofilsortie/itemprofilsortie/itemprofilsortie.component';
import { AddprofilsortieComponent } from './profilsortie/addprofilsortie/addprofilsortie.component';
import { AddgroupecompetenceComponent } from './groupecompetence/addgroupecompetence/addgroupecompetence.component';
import { AddreferentielComponent } from './referentiels/addreferentiel/addreferentiel.component';
import { PromosComponent } from './promos/promos.component';
import { DetailpromosComponent } from './promos/detailpromos/detailpromos.component';
import { ListepromosComponent } from './promos/listepromos/listepromos.component';
import { ItempromosComponent } from './promos/listepromos/itempromos/itempromos.component';
import { AddpromosComponent } from './promos/addpromos/addpromos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemgroupecompetenceComponent} from './groupecompetence/listegroupecompetence/itemgroupecompetence/itemgroupecompetence.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorInterceptorProvider} from './helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ApprenantComponent,
    FormateurComponent,
    CmComponent,
    NavBarComponent,
    ProfilComponent,
    DetailProfilComponent,
    ListeProfilComponent,
    ItemProfilComponent,
    UsersComponent,
    ListeuserComponent,
    ItemuserComponent,
    DetailuserComponent,
    CompetenceComponent,
    DetailcompetenceComponent,
    ListecompetenceComponent,
    ItemcompetenceComponent,
    GroupecompetenceComponent,
    ListegroupecompetenceComponent,
    DetailgroupecompetenceComponent,
    ItemgroupecompetenceComponent,
    ReferentielsComponent,
    DetailreferentielsComponent,
    ListereferentielComponent,
    ItemreferentielComponent,
    AdduserComponent,
    AddprofilComponent,
    ProfilsortieComponent,
    DetailprofilsortieComponent,
    ListeprofilsortieComponent,
    ItemprofilsortieComponent,
    AddprofilsortieComponent,
    AddgroupecompetenceComponent,
    AddreferentielComponent,
    PromosComponent,
    DetailpromosComponent,
    ListepromosComponent,
    ItempromosComponent,
    AddpromosComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
        ,
    ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
