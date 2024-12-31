import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-siguientes',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatGridListModule,TranslateModule],
  templateUrl: './siguientes.component.html',
  styleUrl: './siguientes.component.scss'
})
export class SiguientesComponent {
  vaccines = [
    {
      name: 'Influenza',
      description: 'Anual 2025',
      status: 'Proxima',
      color: 'amarillo',
      nextDate: 'Proxima',
      nextDate2: '11 meses'
    },
    {
      name: 'Virus del Papiloma Humano (VPH)',
      description: '2a dosis para niños y niñas',
      status: 'Proxima',
      color: 'amarillo',
      nextDate: 'Proxima',
      nextDate2: '3 meses'
    },
    {
      name: 'Pentavalente acelular',
      description: '2a dosis',
      status: 'Proxima',
      color: 'amarillo',
      nextDate: 'Proxima',
      nextDate2: '5 semanas'
    },
    {
      name: 'COVID 19',
      description: '3a dosis',
      status: 'Proxima',
      color: 'amarillo',
      nextDate: 'Proxima',
      nextDate2: '2 semanas'
    }
  ];
}
