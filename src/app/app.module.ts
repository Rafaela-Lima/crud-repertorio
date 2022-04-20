import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { environment } from 'src/environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CriarRepertorioComponent } from './components/criar-repertorios/criar-repertorio.component';
import { ListarRepertoriosComponent } from './components/listar-repertorios/listar-repertorios.component';
import { EditarRepertoriosComponent } from './components/editar-repertorios/editar-repertorios.component';

import { CadastrarUsuarioComponent } from './components/cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from './components/login/login.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarRepertorioComponent,
    ListarRepertoriosComponent,
    EditarRepertoriosComponent,
    CadastrarUsuarioComponent,
    LoginComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
