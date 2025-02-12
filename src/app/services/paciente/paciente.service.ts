import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { AutenticacionRequest, AutenticacionResponse, PacienteHomeResponse } from '../../models/PacienteHomeResponse';
import { urls } from '../../const/urls';
import { PacienteSesionResponse } from '../../models/PacienteSesionResponse';
import { PacienteBusquedaVacunasResponse } from '../../models/PacienteBusquedaVacunasResponse';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private readonly ENDPOINT = 'Paciente/';
  constructor(private api: ApiService) {}


  autenticacion(user: AutenticacionRequest){
    return this.api.post<AutenticacionResponse>(`${this.ENDPOINT}${urls.paciente.auth}`,user);
  }

  obtenerVacunasPaciente(curp: string): Observable<PacienteHomeResponse> {
    return this.api.get<PacienteHomeResponse>(`${this.ENDPOINT}${urls.paciente.home}${curp}`);
  }


  obtenerSesionPaciente(curp: string): Observable<PacienteSesionResponse[]> {
    return this.api.get<PacienteSesionResponse[]>(`${this.ENDPOINT}${urls.paciente.sesion}${curp}`);
  }

  buscarVacunasPaciente(curp: string): Observable<PacienteBusquedaVacunasResponse[]> {
    return this.api.get<PacienteBusquedaVacunasResponse[]>(`${this.ENDPOINT}${urls.paciente.vacuna}${curp}`);
  }

}
