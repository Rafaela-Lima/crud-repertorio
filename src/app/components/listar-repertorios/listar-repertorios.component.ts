import { Component, OnInit } from '@angular/core';
import { Repertorio } from 'src/app/models/Repertorio';
import { RepertorioService } from '../../services/repertorios.service.spec';

@Component({
  selector: 'app-listar-repertorios',
  templateUrl: './listar-repertorios.component.html',
  styleUrls: ['./listar-repertorios.component.css']
})
export class ListarRepertoriosComponent implements OnInit {
  public repertorios: Repertorio[] = [];

  constructor(private repertorioService: RepertorioService) {
    this.repertorios = repertorioService.index();
    console.log(this.repertorios);
  }

  public delete(index : number){
    this.repertorioService.deletar(index);
    alert("Deletado com sucesso!");
  }

  ngOnInit(): void {
  }

}
