import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule,MatSlideToggleModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

}
