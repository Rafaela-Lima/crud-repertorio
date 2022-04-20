import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Repertorio } from 'src/app/models/Repertorio';
import { RepertoriosFirebaseService } from 'src/app/services/repertorios.firebase.service';

@Component({
  selector: 'app-editar-repertorios',
  templateUrl: './editar-repertorios.component.html',
  styleUrls: ['./editar-repertorios.component.css']
})
export class EditarRepertoriosComponent implements OnInit {
  public formEditar: FormGroup;
  public id?: any;
  public options = new FormControl();

  constructor(
    private _router: Router,
    private _repertorioFirebaseService: RepertoriosFirebaseService,
    private _formBuilder: FormBuilder,
    private _actRoute: ActivatedRoute
  ) {
    this.formEditar = this._formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(6)]],
      dataestreia: ["", [Validators.required]],
      coreografo: ["", [Validators.required]],
      composicaomusical: ["", [Validators.required]],
      libreto: ["", [Validators.required]],
      personagem_principal: ["", [Validators.required]],
      atos: ["", [Validators.required]],
      tipoenredo: ["", [Validators.required]],
      enredo: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    this._actRoute.params.subscribe((parametros) => {
      console.log(parametros)
      if (parametros["indice"]) {
        this.id = parametros["indice"]
        this._repertorioFirebaseService.getRepertorio(parametros["indice"])
          .subscribe(res => {
            let repertorioRef: any = res;
            this.formEditar = this._formBuilder.group({
              nome: [repertorioRef.nome, [Validators.required, Validators.minLength(5)]],
              dataestreia: [repertorioRef.dataestreia, [Validators.required]],
              coreografo: [repertorioRef.coreografo, [Validators.required]],
              composicaomusical: [repertorioRef.composicaomusical, [Validators.required]],
              libreto: [repertorioRef.libreto, [Validators.required]],
              personagem_principal: [repertorioRef.personagemPrincipal, [Validators.required]],
              atos: [repertorioRef.atos, [Validators.required]],
              tipoenredo: [repertorioRef.tipoenredo, [Validators.required]],
              enredo: [repertorioRef.enredo, [Validators.required]],
              downloadURL: [repertorioRef.downloadURL]
            });
          });
      }
    });
  }

  private validarFormulario() {
    for (let campos in this.formEditar.controls) {
      this.formEditar.controls[campos].markAsTouched();
    }
  }

  public submitForm() {
    this.validarFormulario();
    console.log(this.formEditar);
    if (!this.formEditar.valid) {
      return;
    }
    this.salvar();
  }

  public salvar(): void {
    console.log(this.formEditar.controls)
    var repertorio = new Repertorio(
      this.formEditar.controls['nome'].value,
      this.formEditar.controls['dataestreia'].value,
      this.formEditar.controls['coreografo'].value,
      this.formEditar.controls['composicaomusical'].value,
      this.formEditar.controls['libreto'].value,
      this.formEditar.controls['personagem_principal'].value,
      this.formEditar.controls['atos'].value,
      this.formEditar.controls['tipoenredo'].value,
      this.formEditar.controls['enredo'].value,
      this.formEditar.controls['downloadURL'].value,
    );

    this._repertorioFirebaseService.editarRepertorio(repertorio, this.id)
      .then(() => {
        alert("Repertorio editado com sucesso");
        this._router.navigate(["/listar-repertorios"]);
      })
      .catch((error) => {
        console.log(error)
        alert("Erro ao editar repertorio.");
      })
  }

  public irParaListarRepertorios(): void {
    this._router.navigate(["/listar-repertorios"]);
  }
}

