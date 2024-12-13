import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ModalEfectosSecundariosComponent } from './modal-efectos-secundarios/modal-efectos-secundarios.component';

@Component({
  selector: 'app-esquema-vacunacion',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatGridListModule],
  templateUrl: './esquema-vacunacion.component.html',
  styleUrl: './esquema-vacunacion.component.scss'
})
export class EsquemaVacunacionComponent {

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(ModalEfectosSecundariosComponent, {
      width: '800px'
    });
  }

  vaccines = [
    {
      name: 'Influenza',
      description: 'Anual 2024',
      status: 'No aplicada',
      statusColor: '#d32f2f',
      color: 'rojo',
      nextDate: 'No aplicada',
      nextDate2: 'Perdida por edad'
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
      nextDate: 'Aplicada',
      nextDate2: '12/nov/2024'
    }
  ];

  vaccines2 = [
    {
      name: 'Virus del Papiloma Humano (VPH)',
      description: '2a dosis para niños y niñas',
      status: 'Aplicada',
      statusColor: '#d32f2f',
      color: 'verde',
      nextDate: 'Aplicada',
      nextDate2: '10:20 am'
    }
  ];
}
