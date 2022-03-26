import { Component, OnInit } from '@angular/core';
import { Repertorio } from '../../models/Repertorio';
import { RepertorioService } from '../../services/repertorios.service.spec';

@Component({
  selector: 'app-crud-repertorio',
  templateUrl: './criar-repertorio.component.html',
  styleUrls: ['./criar-repertorio.component.css']
})
export class CriarRepertorioComponent implements OnInit {
  public nome: String = '';
  public dataestreia: String = '';
  public coreografo: String = '';
  public composicaomusical = '';
  public libreto: String = '';
  public personagem_principal: String = '';
  public atos: Number = 1;
  public tipoenredo: String = '';
  public enredo: String = '';


  constructor(private repertorioService: RepertorioService) {
  }

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

    this.repertorioService.add(repertorio);
    alert('Criado com sucesso!');
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
}
