import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EsquemaVacunacionComponent } from '../esquema-vacunacion/esquema-vacunacion.component';
import { HeaderComponent } from '../header/header.component';
import { VacunaComponent } from '../vacuna/vacuna.component';

@Component({
  selector: 'app-home',
  standalone: true,
   imports: [CommonModule, MatIconModule, MatToolbarModule, MatTabsModule, VacunaComponent, EsquemaVacunacionComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
