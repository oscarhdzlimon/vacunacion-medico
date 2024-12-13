import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatToolbarModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  selectedLanguage = 'es';
  allowDataProcessing = true;

  constructor( private router: Router){

  }

  isProfileVisible = false;
  isNotificacionesVisible = false;


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
}
