import { MatTabsModule } from '@angular/material/tabs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { VacunaComponent } from './components/vacuna/vacuna.component';


import { HeaderComponent } from "./components/header/header.component";
import { EsquemaVacunacionComponent } from "./components/esquema-vacunacion/esquema-vacunacion.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
//import { EncabezadoComponent } from "./components/encabezado/encabezado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, MatToolbarModule, MatTabsModule, VacunaComponent, HeaderComponent, EsquemaVacunacionComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDropdownVisible: boolean = false;
  private readonly availableLanguages = ['sp', 'nahuatl', 'en'];

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  constructor(private translate: TranslateService)
  {
    this.translate.addLangs(this.availableLanguages);
   // this.translate.setDefaultLang('en');
    //this.translate.use('en');

    let lenguage = localStorage.getItem('lenguage');
    if(lenguage!) {
      this.translate.setDefaultLang(lenguage);
    } else {
      this.translate.setDefaultLang('sp');
    }
  }
}


