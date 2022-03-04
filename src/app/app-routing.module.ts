import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudRepertorioComponent } from './crud-repertorio/crud-repertorio.component';

const routes: Routes = [
  {path:'crud-repertorio', component: CrudRepertorioComponent},
  {path:'', redirectTo:"/crud-repertorio", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
