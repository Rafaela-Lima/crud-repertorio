import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Repertorio } from '../models/Repertorio';

@Injectable({
  providedIn: 'root'
})
export class RepertoriosFirebaseService {
  private _PATH: string = "repertorios";

  constructor(private angularFire: AngularFirestore) { }

  getRepertorio(id: string) {
    return this.angularFire.collection(this._PATH).doc(id).valueChanges();
  }

  getRepertorios() {
    return this.angularFire.collection(this._PATH).snapshotChanges();
  }

  cadastrarRepertorio(repertorio: Repertorio) {
    return this.angularFire.collection(this._PATH)
      .add(repertorio.values())
      .then(response => {
        console.log(response)
      },
        error => console.log(error));
  }

  deletarRepertorio(repertorio: Repertorio) {
    return this.angularFire.collection(this._PATH)
      .doc(repertorio.id)
      .delete();
  }

  editarRepertorio(repertorio: Repertorio, id: string) {  
    return this.angularFire.collection(this._PATH)
      .doc(id)
      .update(repertorio.values());
  }
}
