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

@Component({
  selector: 'app-home',
  standalone: true,
   imports: [CommonModule, MatIconModule, MatToolbarModule, MatTabsModule, VacunaComponent, EsquemaVacunacionComponent, HeaderComponent, SiguientesComponent, OtrasComponent,TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
}
