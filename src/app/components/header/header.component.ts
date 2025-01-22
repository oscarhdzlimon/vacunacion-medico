import { PacienteService } from './../../services/paciente/paciente.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { ModalLenguajeComponent } from '../modal-lenguaje/modal-lenguaje.component';
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PacienteSesionResponse } from '../../models/PacienteSesionResponse';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatToolbarModule, FormsModule,MatRadioModule,MatDividerModule,MatButtonModule,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
public CURP: string = "GALA930208MGRRPN08";
public sesion: PacienteSesionResponse = new PacienteSesionResponse();
  private readonly translateService = inject(TranslateService);
  selectedLanguage = 'es';
  allowDataProcessing = true;
opcion:string=''
  constructor( private router: Router,public dialog: MatDialog, private pacienteService: PacienteService){
    this.obtenerSesionPaciente();
  }

  isProfileVisible = false;
  isNotificacionesVisible = false;
  isLenguage:boolean=false

  toggleProfile() {
    this.isProfileVisible = !this.isProfileVisible;

    if(this.isProfileVisible){
      this.isNotificacionesVisible = false;
    }
  }

  toggleNotificaciones() {
    this.isNotificacionesVisible = !this.isNotificacionesVisible;
    if(this.isNotificacionesVisible){
      this.isProfileVisible = false;
    }
  }


  redirectReport(){
    this.router.navigate(['report']);
  }
  openModalLanguage(): void
  {
    const dialogRef = this.dialog.open(ModalLenguajeComponent, {
      width: '200px', // Ajusta el tamaño del modal

    });

    dialogRef.afterClosed().subscribe(result => {})
  }
  toogleLanguage()
  {
    this.isLenguage   =true;
  }
  cerrar()
  {
    this.isLenguage   =false;
  }
  seleccionLenguage()
  {
    this.isLenguage   =false;
    console.log(this.opcion)
    if(this.opcion =='')
    {
      alert('Falta seleccionar la opción')
    }else{
      this.translateService.use(this.opcion);
      localStorage.setItem('lenguage', this.opcion);
    }
  }

  public obtenerSesionPaciente(){
    let sesion = this.pacienteService.obtenerSesionPaciente(this.CURP).subscribe((resp) => {

      if(resp){
        this.sesion = resp[0];
        this.sesion.nombreCompleto = (this.sesion.nombre ? this.sesion.nombre: "") + " " + (this.sesion.paterno ? this.sesion.paterno: "") + " " + (this.sesion.materno ? this.sesion.materno: "") ;
      }
    });

  }
}
