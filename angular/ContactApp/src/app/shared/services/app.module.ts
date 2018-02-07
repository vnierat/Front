import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserApiService} from './user-api.service';
import {ProfilComponent} from '../../profil/profil.component';
import {AjouterComponent} from '../../ajouter/ajouter.component';
import {AsyncLocalStorage, AsyncLocalStorageModule} from 'angular-async-local-storage';
import {UserStorageService} from './user-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    AjouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AsyncLocalStorageModule
  ],
  providers: [
    UserApiService,
    UserStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
