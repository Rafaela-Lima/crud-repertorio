import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarRepertorioComponent } from './components/criar-repertorios/criar-repertorio.component';
import { EditarRepertoriosComponent } from './components/editar-repertorios/editar-repertorios.component';
import { ListarRepertoriosComponent } from './components/listar-repertorios/listar-repertorios.component';

const routes: Routes = [
  {path:'crud-repertorio', component: CriarRepertorioComponent},
  {path:'listar-repertorios', component: ListarRepertoriosComponent},
  {path:'editar-repertorios/:index', component: EditarRepertoriosComponent},
  {path:'', redirectTo:"/crud-repertorio", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
