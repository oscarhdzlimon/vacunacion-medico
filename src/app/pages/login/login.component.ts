import { Component } from '@angular/core';
import { AutenticacionRequest } from '../../models/PacienteHomeResponse';
import { PacienteService } from '../../services/paciente/paciente.service';
import { tokenSetter } from '../../utils/token.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private pacienteService: PacienteService,
    private router: Router
  ){
    this.autenticarUsuario();
  }


  autenticarUsuario(){

      var auth = new AutenticacionRequest();
      auth.username = "servicesSSA";
      auth.password = "PMS2025";

      this.pacienteService.autenticacion(auth).subscribe((resp) => {
        if(resp.access_token){

          tokenSetter(resp.access_token);
          this.router.navigate(["home"])
        }
      });

  }


}
