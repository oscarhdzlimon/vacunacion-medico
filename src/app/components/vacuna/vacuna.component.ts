import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacuna',
  standalone: true,
  imports: [  MatCardModule,
    MatButtonModule, MatIcon,MatIconModule ,CommonModule
    ],
  templateUrl: './vacuna.component.html',
  styleUrl: './vacuna.component.scss'
})
export class VacunaComponent {
mapa1:boolean=true
mapa2:boolean=false
  agrandar()
  {
    this.mapa1=false
    this.mapa2=true
  }
  cerrar()
  {
    this.mapa1=false
    this.mapa2=true
  }
}
