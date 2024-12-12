import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-vacunas',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatGridListModule],
  templateUrl: './vacunas.component.html',
  styleUrl: './vacunas.component.scss'
})
export class VacunasComponent {
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
