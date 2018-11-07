import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { routing } from './app.routing';
import {AuthenticationService} from "./service/auth.service";
import {UserService} from "./service/user.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import {AngularFireModule} from "@angular/fire";
import { config } from 'src/environments/firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdicionarComponent,
    EditarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [AuthenticationService, UserService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
