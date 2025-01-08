import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { PacienteHomeResponse } from '../../models/PacienteHomeResponse';
import { urls } from '../../const/urls';
import { PacienteSesionResponse } from '../../models/PacienteSesionResponse';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private readonly ENDPOINT = 'Paciente/';
  constructor(private api: ApiService) {}

  obtenerVacunasPaciente(curp: string): Observable<PacienteHomeResponse> {
    return this.api.get<PacienteHomeResponse>(`${this.ENDPOINT}${urls.paciente.home}${curp}`);
  }


  obtenerSesionPaciente(curp: string): Observable<PacienteSesionResponse[]> {
    return this.api.get<PacienteSesionResponse[]>(`${this.ENDPOINT}${urls.paciente.sesion}${curp}`);
  }

}
