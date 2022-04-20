import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Repertorio } from '../models/Repertorio';

export class MyData{
  repertorio? : Repertorio; 
  downloadURL? : string; 
}

@Injectable({
  providedIn: 'root'
})
export class ImagemService {
  task? : AngularFireUploadTask;
  UploadedFileUrl?: Observable<string>;
  fileName? : string;

  constructor(
    private storage : AngularFireStorage,
    private router : Router,
    private db_name : AngularFirestore) { 
    }
    
    async uploadStorage(file : File, repertorio : Repertorio){ 
    if(file.type.split('/')[0]!= 'image'){
      console.log("Tipo não suportado!");
      return;
    }
    this.fileName = file.name;
    const path = `imagens/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    this.task = this.storage.upload(path, file);
    this.task.snapshotChanges().pipe(
      finalize(()=>{
        this.UploadedFileUrl = fileRef.getDownloadURL();
        this.UploadedFileUrl.subscribe((resp)=>{
            repertorio.downloadURL = resp,
            this.uploadDatabase(repertorio);
        })
      })).subscribe();
    }

    uploadDatabase(image : Repertorio){
      return this.db_name.collection('repertorios').add(image)
      .then(()=>{
        alert("Imagem salva com sucesso!");
        this.router.navigate(["/listar-repertorios"])

      })
      .catch((error)=>{
        alert("Erro ao salvar imagem!");
        console.log(error);
      })
    }

    getImages(){
      return this.db_name.collection('imagens').snapshotChanges().pipe(
        map((action)=> {
          return action.map((dados)=>({
            key: dados.payload.doc.id,
            data: dados.payload.doc.data()
          }))
        })
      );
    }
}
