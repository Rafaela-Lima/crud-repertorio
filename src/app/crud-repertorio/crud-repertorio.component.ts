import { Component, OnInit } from '@angular/core';
import { Repertorio } from '../models/Repertorio';

@Component({
  selector: 'app-crud-repertorio',
  templateUrl: './crud-repertorio.component.html',
  styleUrls: ['./crud-repertorio.component.css']
})
export class CrudRepertorioComponent implements OnInit {

  public repertorios: Array<Repertorio> = [];

  private indexEdit: number = -1;

  public nome: String = '';
  public dataestreia: String = '';
  public coreografo: String = '';
  public composicaomusical = '';
  public libreto: String = '';
  public personagem_principal: String = '';
  public atos: Number = 1;
  public tipoenredo: String = '';
  public enredo: String = '';

  constructor() { }

  ngOnInit(): void {
    this.iniliazaVaraiveis();
  }

  criar() {
    let repertorio = new Repertorio(
      this.nome,
      this.dataestreia,
      this.coreografo,
      this.composicaomusical,
      this.libreto,
      this.personagem_principal,
      this.atos,
      this.tipoenredo,
      this.enredo
    );

    if (this.indexEdit >= 0) {
      this.repertorios[this.indexEdit] = repertorio;
      this.indexEdit = -1;
      return;
    }

    this.repertorios.push(repertorio);
    this.iniliazaVaraiveis();
  }

  iniliazaVaraiveis() {
    this.nome = '';
    this.dataestreia = '';
    this.coreografo = '';
    this.composicaomusical = '';
    this.libreto = '';
    this.personagem_principal = '';
    this.atos = 0;
    this.tipoenredo = '';
    this.enredo = '';
  }

  setEditar(index: number) {
    this.indexEdit = index;
    this.nome = this.repertorios[index].nome;
    this.dataestreia = this.repertorios[index].dataestreia;
    this.coreografo = this.repertorios[index].coreografo;
    this.libreto = this.repertorios[index].libreto;
    this.personagem_principal = this.repertorios[index].personagemPrincipal;
    this.atos = this.repertorios[index].atos;
    this.tipoenredo = this.repertorios[index].tipoenredo;
    this.enredo = this.repertorios[index].enredo;
  }

  apagar(index: number) {
    this.repertorios.splice(index, 1);
  }
}
