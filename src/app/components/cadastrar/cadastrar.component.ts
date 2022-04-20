import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  public formCadastro: FormGroup;

  constructor(private _router: Router,
    private _formBuilder: FormBuilder,
    private usuarioService: UsuarioService) {
    this.formCadastro = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
  }

  private validarFormulario() {
    for (let campos in this.formCadastro.controls) {
      this.formCadastro.controls[campos].markAsTouched();
    }
  }

  public submitForm() {
    this.validarFormulario();
    if (!this.formCadastro.valid) {
      return;
    }
    this.cadastrar();
  }

  public cadastrar() {
    if (this.formCadastro.controls["password"].value == this.formCadastro.controls['confirmPassword'].value) {
      this.usuarioService.cadastrarComEmailPassword(
        this.formCadastro.controls['email'].value,
        this.formCadastro.controls['password'].value)
        .then(() => {
          alert("Cadastro Efetuado com Sucesso!");
          this._router.navigate(["/login"]);
        })
        .catch((error) => {
          alert("Erro ao efetuar Cadastro, tente novamente!");
          console.log(error);
        })
    } else {
      alert("As senhas não conferem!");
    }

  }
}
