import { Injectable } from '@angular/core';
import { Repertorio } from '../models/Repertorio';

import { RepertoriosService } from './repertorios.service';

@Injectable({
  providedIn: 'root'
})

export class RepertorioService {
  private repertorios: Repertorio[] = [];

  public add(repertorio: Repertorio) {
    this.repertorios.push(repertorio);
  }

  public index() {
    return this.repertorios;
  }

  public deletar(index: number) {
    this.repertorios.splice(index, 1);
  }

  public get(index : number){
    return this.repertorios[index];
  }

  public save(index : number, repertorio : Repertorio){
    this.repertorios[index] = repertorio;
  }
}