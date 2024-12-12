import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-esquema-vacunacion',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatGridListModule],
  templateUrl: './esquema-vacunacion.component.html',
  styleUrl: './esquema-vacunacion.component.scss'
})
export class EsquemaVacunacionComponent {
  vaccines = [
    {
      name: 'Influenza',
      description: 'Anual 2024',
      status: 'No aplicada',
      statusColor: '#d32f2f',
      color: 'rojo',
      nextDate: 'No aplicada',
      nextDate2: ''
    },
    {
      name: 'TD / TDPA',
      description: 'Tétanos, Difteria, Tos ferina | Cada 10 años',
      status: 'Próxima',
      statusColor: '#ff9800',
      color: 'amarillo',
      nextDate: 'Próxima',
      nextDate2: '3 semanas'
    },
    {
      name: 'Antihepatitis B',
      description: 'Mayores de 65 años o en riesgo',
      status: '',
      statusColor: '#388e3c',
      color: 'verde',
      nextDate: '12/nov/2024',
      nextDate2: '10:20am'
    }
  ];
}
