import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarRepertorioComponent } from './components/criar-repertorios/criar-repertorio.component';
import { ListarRepertoriosComponent } from './components/listar-repertorios/listar-repertorios.component';
import { EditarRepertoriosComponent } from './components/editar-repertorios/editar-repertorios.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarRepertorioComponent,
    ListarRepertoriosComponent,
    EditarRepertoriosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
