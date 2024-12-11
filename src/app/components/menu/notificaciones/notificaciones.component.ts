import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.scss'
})
export class NotificacionesComponent {
  notificaciones = [
    {
      titulo: '3a dosis COVID-19',
      fecha: '06/16/2024',
      contenido: 'Bacon ipsum dolor amet ball tip burgdoggen turducken drumstick pancetta rump shank',
    },
    {
      titulo: '3a dosis COVID-19',
      fecha: '06/16/2024',
      contenido: 'Bacon ipsum dolor amet ball tip burgdoggen turducken drumstick pancetta rump shank',
    },
  ];
}
