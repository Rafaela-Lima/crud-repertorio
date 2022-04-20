import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repertorio } from 'src/app/models/Repertorio';
import { ImagemService } from 'src/app/services/imagem.service';
import { RepertoriosFirebaseService } from 'src/app/services/repertorios.firebase.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-repertorios',
  templateUrl: './listar-repertorios.component.html',
  styleUrls: ['./listar-repertorios.component.css']
})
export class ListarRepertoriosComponent implements OnInit {
  public repertorios?: Repertorio[] = [];

  constructor(
    private _router: Router,
    private usuarioService : UsuarioService,
    private repertoriosFirebaseService: RepertoriosFirebaseService) {
  }
  
  ngOnInit() {
    this.repertoriosFirebaseService.getRepertorios().subscribe(res => {
      this.repertorios = res.map(e => {
        console.log(e.payload.doc.data())
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Repertorio
        } as Repertorio;
      })
    })
  }
  
  public delete(repertorio : Repertorio){
    let resultado = confirm("Deseja excluir o repertorio " + repertorio.nome + " ?");
    if (resultado) {
      this.repertoriosFirebaseService.deletarRepertorio(repertorio)
        .then(() => {
          alert("Repertorio excluido com sucesso")
        })
        .catch(() => {
          alert("Erro ao excluir o repertorio.")
        })
    }
  }

  public editar(repertorio: Repertorio): void {
    this._router.navigate(["/editar-repertorios", repertorio.id]);
  }

  public irParaCadastrarRepertorio(): void {
    this._router.navigate(["/cadastrar-repertorios"]);
  }

  public logout(){
    let resultado = confirm("Deseja realmente sair?");
    if(resultado){
      this.usuarioService.logout()
      .then(()=>{
        this._router.navigate(["/login"]);
      })
      .catch(()=>{
        alert("Erro ao sair da plataforma!");
      })
    }
  }
}