import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repertorio } from 'src/app/models/Repertorio';
import { RepertorioService } from 'src/app/services/repertorios.service.spec';

@Component({
  selector: 'app-editar-repertorios',
  templateUrl: './editar-repertorios.component.html',
  styleUrls: ['./editar-repertorios.component.css']
})
export class EditarRepertoriosComponent implements OnInit {

  private indexToEdit: string | null = '';
  public repertorioToEdit: Repertorio;

  public nome: String = '';
  public dataestreia: String = '';
  public coreografo: String = '';
  public composicaomusical : String = '';
  public libreto: String = '';
  public personagem_principal: String = '';
  public atos: Number = 1;
  public tipoenredo: String = '';
  public enredo: String = '';

  constructor(private _Activatedroute: ActivatedRoute, private repertorioService: RepertorioService) {
    this.indexToEdit = this._Activatedroute.snapshot.paramMap.get("index");

    
    this.repertorioToEdit = this.repertorioService.get(this.getStringToInt());

    this.setEditable();
  }

  private getStringToInt() {
    if (this.indexToEdit === null) {
      this.indexToEdit = '0';
    }

    return parseInt(this.indexToEdit);
  }

  private setEditable() {
    this.nome = this.repertorioToEdit.nome;
    this.dataestreia = this.repertorioToEdit.dataestreia;
    this.coreografo = this.repertorioToEdit.coreografo;
    this.libreto = this.repertorioToEdit.libreto;
    this.personagem_principal = this.repertorioToEdit.personagemPrincipal;
    this.atos = this.repertorioToEdit.atos;
    this.tipoenredo = this.repertorioToEdit.tipoenredo;
    this.enredo = this.repertorioToEdit.enredo;
    this.composicaomusical = this.repertorioToEdit.composicaomusical;
  }

  public save() {
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

    this.repertorioService.save(this.getStringToInt(), repertorio);

    alert("Salvo com sucesso!");
  }
  
  ngOnInit(): void { }
}
