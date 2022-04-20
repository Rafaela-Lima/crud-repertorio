import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public router: Router, public usuarioService: UsuarioService) { }

  public logout() {
    console.log('entrei aqui')
    this.usuarioService.logout()
      .then(() => {
        this.router.navigate(["/login"]);
      })
      .catch((error) => {
        alert("ERRO AO SAIR, TENTE NOVAMENTE MAIS TARDE");
      });
  }
}
