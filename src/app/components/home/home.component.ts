import { PacienteService } from './../../services/paciente/paciente.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EsquemaVacunacionComponent } from '../esquema-vacunacion/esquema-vacunacion.component';
import { HeaderComponent } from '../header/header.component';
import { VacunaComponent } from '../vacuna/vacuna.component';
import { SiguientesComponent } from "../esquema-vacunacion/siguientes/siguientes.component";
import { OtrasComponent } from "../esquema-vacunacion/otras/otras.component";
import { TranslateModule } from '@ngx-translate/core';
import { VwEsquemaBasicoPaciente, VwOtrasVacPaciente, VwSiguientesVacPaciente } from '../../models/PacienteHomeResponse';

@Component({
  selector: 'app-home',
  standalone: true,
   imports: [CommonModule, MatIconModule, MatToolbarModule, MatTabsModule, VacunaComponent, EsquemaVacunacionComponent, HeaderComponent, SiguientesComponent, OtrasComponent,TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public curpPaciente: string = "";
  public vwEsquemaBasicoPaciente: VwEsquemaBasicoPaciente[] = [];
  public vwOtrasVacPaciente: VwOtrasVacPaciente[] = [];
  public vwSiguientesVacPaciente: VwSiguientesVacPaciente[] = [];

  constructor(private pacienteService: PacienteService){
    this.obtenerVacunasPaciente();
  }

  indexSeleccionado = 0;

  changeIndex(index: number){
    this.indexSeleccionado = index;
  }

  links = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];
  activeLink = this.links[0].path;

  setActiveLink(path: string): void {
    this.activeLink = path;
  }

  obtenerVacunasPaciente(){
    this.curpPaciente = "QOVT220908HYNPQ01";
    this.pacienteService.obtenerVacunasPaciente(this.curpPaciente).subscribe((data) => {
      console.log("Respuesta", data);
      this.vwEsquemaBasicoPaciente = data.vwEsquemaBasicoPaciente;
      console.log("vwEsquemaBasicoPaciente: ", this.vwEsquemaBasicoPaciente);
      this.vwOtrasVacPaciente = data.vwOtrasVacPaciente;
      console.log("vwOtrasVacPaciente: ", this.vwOtrasVacPaciente);
      this.vwSiguientesVacPaciente = data.vwSiguientesVacPaciente;
      console.log("vwOtrasVacPaciente: ", this.vwSiguientesVacPaciente);

    },
    (error) => {
      console.error('Error fetching users:', error);
    });
  }
}
