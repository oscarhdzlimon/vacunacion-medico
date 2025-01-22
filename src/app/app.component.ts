import { MatTabsModule } from '@angular/material/tabs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VacunaComponent } from './components/vacuna/vacuna.component';

import { HeaderComponent } from './components/header/header.component';
import { EsquemaVacunacionComponent } from './components/esquema-vacunacion/esquema-vacunacion.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AutenticacionRequest } from './models/PacienteHomeResponse';
import { tokenSetter } from './utils/token.utils';
import { PacienteService } from './services/paciente/paciente.service';
import { GeolocationService } from './services/geolocation.service';
//import { EncabezadoComponent } from "./components/encabezado/encabezado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    VacunaComponent,
    HeaderComponent,
    EsquemaVacunacionComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  latitude: number | null = null;
  longitude: number | null = null;

  isDropdownVisible: boolean = false;
  private readonly availableLanguages = ['sp', 'nahuatl', 'en'];

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  constructor(
    private router: Router,
    private pacienteService: PacienteService,
    private translate: TranslateService,
    private geolocationService: GeolocationService
  ) {
    ;
    this.autenticarUsuario();

    this.translate.addLangs(this.availableLanguages);
    // this.translate.setDefaultLang('en');
    //this.translate.use('en');

    let lenguage = localStorage.getItem('lenguage');
    if (lenguage!) {
      this.translate.setDefaultLang(lenguage);
    } else {
      this.translate.setDefaultLang('sp');
    }


    this.obtenerLocalizacion();
  }

  autenticarUsuario() {
    var auth = new AutenticacionRequest();
    auth.username = 'servicesSSA';
    auth.password = 'PMS2025';

    this.pacienteService.autenticacion(auth).subscribe((resp) => {
      if (resp.access_token) {
        ;
        tokenSetter(resp.access_token);
        this.router.navigate(['home']);
      }
    });
  }

  obtenerLocalizacion(){
    this.geolocationService
      .getCurrentLocation()
      .then((coords) => {
        this.latitude = coords.latitude;
        this.longitude = coords.longitude;

        console.log("latitude: ", coords.latitude)
        console.log("longitude: ", coords.longitude)

      })
      .catch((error) => {
        console.error('Error obteniendo ubicación:', error);
      });
  }
}
