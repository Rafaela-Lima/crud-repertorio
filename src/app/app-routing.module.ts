import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarRepertorioComponent } from './components/criar-repertorios/criar-repertorio.component';
import { EditarRepertoriosComponent } from './components/editar-repertorios/editar-repertorios.component';
import { ListarRepertoriosComponent } from './components/listar-repertorios/listar-repertorios.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';


const routes: Routes = [
  {path:'crud-repertorio', component: CriarRepertorioComponent},
  {path:'listar-repertorios', component: ListarRepertoriosComponent},
  {path:'editar-repertorios/:indice', component: EditarRepertoriosComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastrarComponent},
  {path:'', redirectTo:"/login", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
