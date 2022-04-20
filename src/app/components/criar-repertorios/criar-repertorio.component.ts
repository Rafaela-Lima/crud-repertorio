import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Repertorio } from '../../models/Repertorio';
import { RepertoriosFirebaseService } from '../../services/repertorios.firebase.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ImagemService } from '../../services/imagem.service';

@Component({
  selector: 'app-crud-repertorio',
  templateUrl: './criar-repertorio.component.html',
  styleUrls: ['./criar-repertorio.component.css']
})
export class CriarRepertorioComponent implements OnInit {
  public formCadastrar: FormGroup;
  public options = new FormControl();
  public imagemURL?: string;


  constructor(private _router: Router,
    private repertorioFirebaseService: RepertoriosFirebaseService,
    private _formBuilder: FormBuilder,
    public imagemService: ImagemService) {
    this.formCadastrar = this._formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(6)]],
      dataestreia: ["", [Validators.required]],
      coreografo: ["", [Validators.required]],
      composicaomusical: ["", [Validators.required]],
      libreto: ["", [Validators.required]],
      personagemPrincipal: ["", [Validators.required]],
      atos: ["", [Validators.required]],
      tipoenredo: ["", [Validators.required]],
      enredo: ["", [Validators.required]],
      downloadURL: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  private validarFormulario() {
    for (let campos in this.formCadastrar.controls) {
      this.formCadastrar.controls[campos].markAllAsTouched();
    }
  }

  public submitForm() {
    this.validarFormulario();
   
    if(!this.formCadastrar.valid){
      return;
    }

    var repertorio = new Repertorio(
      this.formCadastrar.controls['nome'].value,
      this.formCadastrar.controls['dataestreia'].value,
      this.formCadastrar.controls['coreografo'].value,
      this.formCadastrar.controls['composicaomusical'].value,
      this.formCadastrar.controls['libreto'].value,
      this.formCadastrar.controls['personagemPrincipal'].value,
      this.formCadastrar.controls['atos'].value,
      this.formCadastrar.controls['tipoenredo'].value,
      this.formCadastrar.controls['enredo'].value,
      this.formCadastrar.controls['downloadURL'].value,
    );

    this.salvar();
  }

    public salvar() : void{
      const target = document.getElementById("file") as HTMLInputElement;
      const file : File = (target.files as FileList)[0];
      if(file.type.split('/')[0] != 'image'){
        alert("Tipo de arquivo não suportado");
        console.log("tipo não suportado");
        return;
      }
      else{
      console.log(document.getElementById("file"))
      this.uploadFile(file, this.formCadastrar.value)
      .then(()=>(console.log("salvo com sucesso!")))
      .catch((error)=>(console.log(error)))
      ;}}

      public irParaListaDeRepertorios(): void {
        this._router.navigate(["/listar-repertorios"]);
      }


    public uploadFile(event: any, repertorio : Repertorio){

      return this.imagemService.uploadStorage(event, repertorio)
      .then((data)=>{console.log(data)}) 
      .catch((error)=>{console.log(error)}) 
    }
}

//   criar() {

//     let repertorio = new Repertorio(
//       this.nome,
//       this.dataestreia,
//       this.coreografo,
//       this.composicaomusical,
//       this.libreto,
//       this.personagem_principal,
//       this.atos,
//       this.tipoenredo,
//       this.enredo
//     );

//     this.repertorioService.add(repertorio);
//     alert('Criado com sucesso!');
//     this.iniliazaVaraiveis();
//   }

//   iniliazaVaraiveis() {
//     this.nome = '';
//     this.dataestreia = '';
//     this.coreografo = '';
//     this.composicaomusical = '';
//     this.libreto = '';
//     this.personagem_principal = '';
//     this.atos = 0;
//     this.tipoenredo = '';
//     this.enredo = '';
//   }
// }
