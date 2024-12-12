import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor( private router: Router){

  }

  isProfileVisible = false;


  toggleProfile() {
    this.isProfileVisible = !this.isProfileVisible;
  }


  redirectReport(){
    this.router.navigate(['report']);
  }
}
