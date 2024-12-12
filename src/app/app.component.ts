import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { VacunaComponent } from './components/vacuna/vacuna.component';
import { HomeComponent } from './components/menu/home/home.component';

import { HeaderComponent } from "./components/header/header.component";
import { EsquemaVacunacionComponent } from "./components/esquema-vacunacion/esquema-vacunacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, MatToolbarModule,VacunaComponent,PerfilComponent, HomeComponent],
  imports: [CommonModule, RouterOutlet, MatIconModule, MatToolbarModule, MatTabsModule, HeaderComponent, EsquemaVacunacionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  paciente = {
    nombre: 'José Trejo Pérez de las Casas',
    saludo: 'Bienvenido',
    edad: 45,
    ultimaActualizacion: '03/dic/2024',
  };

  historialVacunacion = [
    {
      fecha: '02/ene/2024',
      vacuna: 'TD / TDPA',
      descripcion: 'Tétanos, Difteria, Tos ferina.',
    },
    {
      fecha: '12/nov/2023',
      vacuna: 'Influenza',
      descripcion: 'Vacuna anual para influenza.',
    },
    {
      fecha: '15/oct/2022',
      vacuna: 'Neumococo',
      descripcion: 'Protección contra infecciones neumocócicas.',
    },
  ];



  selectedTabIndex = 0; // Índice de la pestaña seleccionada

  selectedMenuIndex = 0; // Índice de la pestaña seleccionada

  // Datos de las tabs
  tabs = [
    {
      titulo: 'Esquema básico',
      //icono: 'assets/images/inyeccion.svg', // Cambia al ícono real
      icono: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="8" fill="#971C4E" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.40908 8.682C5.18314 8.90795 5.18314 9.27425 5.40908 9.5002C5.63501 9.72615 6.00132 9.72615 6.22726 9.5002L6.63661 9.09085L8.6818 11.1361L7.04545 12.7725C6.8195 12.9984 6.8195 13.3647 7.04545 13.5907C7.27135 13.8166 7.63765 13.8166 7.8636 13.5907L8.6816 12.7726L15.6363 19.7275C16.475 20.5663 17.7008 20.7823 18.7388 20.3756L19.3181 20.9549C19.621 21.2578 20.0501 21.3577 20.4362 21.2544L21.7728 22.591C21.9987 22.817 22.365 22.817 22.5909 22.591C22.8169 22.3651 22.8169 21.9988 22.5909 21.7728L21.2542 20.436C21.3571 20.0501 21.2572 19.6213 20.9545 19.3185L20.3752 18.7392C20.782 17.7011 20.566 16.4753 19.7272 15.6365L12.7725 8.6816L13.5908 7.86325C13.8168 7.6373 13.8168 7.271 13.5908 7.04505C13.3649 6.81912 12.9986 6.81912 12.7727 7.04505L11.1363 8.68145L9.09115 6.63624L9.49995 6.2274C9.7259 6.00146 9.7259 5.63514 9.49995 5.4092C9.27405 5.18326 8.90775 5.18326 8.6818 5.4092L5.40908 8.682ZM10.4292 9.3886L8.38405 7.34335L7.3437 8.3837L9.3889 10.429L10.4292 9.3886ZM12.0654 9.38875L9.3887 12.0655L11.5917 14.2686L14.2684 11.5918L12.0654 9.38875ZM12.4099 15.0868L13.6371 16.3141L14.5665 15.3847C14.7924 15.1588 15.1587 15.1588 15.3847 15.3847C15.6106 15.6107 15.6106 15.977 15.3847 16.2029L14.4553 17.1323L15.2733 17.9503L16.2028 17.0208C16.4287 16.7949 16.795 16.7949 17.021 17.0208C17.2469 17.2468 17.2469 17.6131 17.021 17.839L16.0915 18.7685L16.3434 19.0204C16.8925 19.5695 17.6949 19.7107 18.3743 19.444L19.4438 18.3746C19.7104 17.6952 19.5692 16.8927 19.0201 16.3437L15.0865 12.41L12.4099 15.0868ZM20.2612 20.0415C20.257 20.0359 20.2524 20.0306 20.2474 20.0256L19.8353 19.6135C19.8005 19.6523 19.7645 19.6903 19.7272 19.7275C19.6899 19.7648 19.6519 19.8009 19.6131 19.8357L20.0252 20.2478C20.0303 20.2528 20.0356 20.2575 20.0411 20.2617C20.0664 20.2169 20.0982 20.1746 20.1364 20.1364C20.1745 20.0984 20.2165 20.0667 20.2612 20.0415Z" fill="#971C4E"/>
</svg>
`,
      contenido: 'Información sobre el esquema básico de vacunación.',
    },
    {
      titulo: 'Siguientes',
      //icono: 'assets/images/escudo.svg', // Cambia al ícono real
      icono: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="8" fill="#971C4E" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.91135 20.4955C10.1355 21.6012 11.4765 22.514 12.9907 23.2338C13.8017 23.6194 14.7637 23.5842 15.5413 23.1406C16.8527 22.3925 17.994 21.4922 19.0975 20.4955C21.4367 18.3827 22.8004 15.4749 22.89 12.4085L22.9944 8.83295C23.0066 8.41675 22.9951 7.5 22.9951 7.5C22.4716 7.4136 21.9424 7.35025 21.4139 7.28695C19.7791 7.0912 18.1512 6.89632 16.7227 6.02323L15.7038 5.40046C14.8302 4.86652 13.7091 4.86651 12.8355 5.40046L11.8597 5.99684C10.2267 6.99493 8.2361 7.1841 6.30936 7.3672C5.87291 7.40865 5.43975 7.4498 5.01476 7.5C5.01476 7.5 5.00242 8.42225 5.01476 8.84435L5.11889 12.4085C5.20848 15.4749 6.57211 18.3827 8.91135 20.4955ZM6.00938 8.40095C6.00976 8.56015 6.01119 8.70785 6.01433 8.81515L6.11846 12.3793C6.19985 15.1648 7.4385 17.8177 9.5816 19.7534C10.7374 20.7973 11.9979 21.6546 13.42 22.3307C13.9368 22.5763 14.5534 22.553 15.0457 22.2721C16.2733 21.5718 17.3554 20.7214 18.4272 19.7534C20.5704 17.8177 21.809 15.1648 21.8904 12.3793L21.9949 8.80375C21.9982 8.6918 21.9996 8.5347 22 8.3664C21.7659 8.33625 21.5282 8.3078 21.2852 8.2787L21.2579 8.27545C20.7203 8.21105 20.1568 8.14315 19.5969 8.04815C18.4749 7.85775 17.3011 7.54865 16.2013 6.87648L15.1823 6.25372C14.6288 5.91543 13.9105 5.91543 13.357 6.25372L12.3812 6.85009C11.2219 7.55865 9.9413 7.8944 8.70795 8.0929C7.94305 8.216 7.1192 8.2947 6.34734 8.3685C6.23344 8.37935 6.12067 8.39015 6.00938 8.40095Z" fill="#971C4E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9994 18.4997L12.9999 9.49994L14.9999 9.50004L14.9994 18.4998L12.9994 18.4997Z" fill="#971C4E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4999 14.9999H9.49991V12.9999H18.4999V14.9999Z" fill="#971C4E"/>
</svg>
`,
      contenido: 'Vacunas siguientes recomendadas.',
    },
    {
      titulo: 'Otras',
      //icono: 'assets/images/virus.svg', // Cambia al ícono real
      icono: `<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8.5" cy="8" r="8" fill="#971C4E" fill-opacity="0.15"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 7.5C10.9102 7.5 8 10.4102 8 14C8 17.5898 10.9102 20.5 14.5 20.5C18.0898 20.5 21 17.5898 21 14C21 10.4102 18.0898 7.5 14.5 7.5ZM7 14C7 9.85785 10.3579 6.5 14.5 6.5C18.6421 6.5 22 9.85785 22 14C22 18.1421 18.6421 21.5 14.5 21.5C10.3579 21.5 7 18.1421 7 14Z" fill="#971C4E"/>
<path d="M13.5 15.5C13.5 14.9477 13.0523 14.5 12.5 14.5C11.9477 14.5 11.5 14.9477 11.5 15.5C11.5 16.0523 11.9477 16.5 12.5 16.5C13.0523 16.5 13.5 16.0523 13.5 15.5Z" fill="#971C4E"/>
<path d="M15 11.5C15 10.9477 14.5523 10.5 14 10.5C13.4477 10.5 13 10.9477 13 11.5C13 12.0523 13.4477 12.5 14 12.5C14.5523 12.5 15 12.0523 15 11.5Z" fill="#971C4E"/>
<path d="M18 15C18 14.4477 17.5523 14 17 14C16.4477 14 16 14.4477 16 15C16 15.5523 16.4477 16 17 16C17.5523 16 18 15.5523 18 15Z" fill="#971C4E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.5C13 4.22386 13.2239 4 13.5 4H15.5C15.7761 4 16 4.22386 16 4.5C16 4.77614 15.7761 5 15.5 5H15V8C15 8.27615 14.7761 8.5 14.5 8.5C14.2239 8.5 14 8.27615 14 8V5H13.5C13.2239 5 13 4.77614 13 4.5Z" fill="#971C4E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 19.5C14.7761 19.5 15 19.7239 15 20V23H15.5C15.7761 23 16 23.2239 16 23.5C16 23.7761 15.7761 24 15.5 24H13.5C13.2239 24 13 23.7761 13 23.5C13 23.2239 13.2239 23 13.5 23H14V20C14 19.7239 14.2239 19.5 14.5 19.5Z" fill="#971C4E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.8431 21.7781C8.64785 21.9734 8.33125 21.9734 8.136 21.7781L6.72179 20.3639C6.52653 20.1687 6.52653 19.8521 6.72179 19.6568C6.91706 19.4616 7.23364 19.4616 7.4289 19.6568L7.78245 20.0104L9.9038 17.8891C10.099 17.6938 10.4156 17.6938 10.6109 17.8891C10.8061 18.0843 10.8061 18.4009 10.6109 18.5962L8.48955 20.7175L8.8431 21.071C9.0384 21.2663 9.0384 21.5829 8.8431 21.7781Z" fill="#971C4E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3891 10.1108C18.1938 9.9156 18.1938 9.599 18.3891 9.40375L20.5104 7.28245L20.1569 6.92887C19.9616 6.73361 19.9616 6.41703 20.1569 6.22176C20.3521 6.0265 20.6687 6.0265 20.864 6.22176L22.2782 7.636C22.4734 7.83125 22.4734 8.1478 22.2782 8.3431C22.0829 8.53835 21.7663 8.53835 21.5711 8.3431L21.2175 7.98955L19.0962 10.1108C18.9009 10.3061 18.5843 10.3061 18.3891 10.1108Z" fill="#971C4E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.72182 8.3432C6.52656 8.1479 6.52656 7.83135 6.72182 7.63605L8.13605 6.22185C8.3313 6.02659 8.6479 6.02659 8.84315 6.22185C9.0384 6.41712 9.0384 6.7337 8.84315 6.92896L8.4896 7.2825L10.6109 9.40385C10.8061 9.5991 10.8061 9.9157 10.6109 10.1109C10.4156 10.3062 10.099 10.3062 9.9038 10.1109L7.7825 7.9896L7.42893 8.3432C7.23367 8.53845 6.91708 8.53845 6.72182 8.3432Z" fill="#971C4E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3891 17.8891C18.5844 17.6939 18.901 17.6939 19.0962 17.8891L21.2175 20.0105L21.5711 19.6569C21.7664 19.4616 22.0829 19.4616 22.2782 19.6569C22.4735 19.8522 22.4735 20.1688 22.2782 20.364L20.864 21.7782C20.6687 21.9735 20.3521 21.9735 20.1569 21.7782C19.9616 21.583 19.9616 21.2664 20.1569 21.0711L20.5104 20.7176L18.3891 18.5963C18.1938 18.401 18.1938 18.0844 18.3891 17.8891Z" fill="#971C4E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 15.5001C4.72386 15.5001 4.5 15.2762 4.5 15.0001V13.0001C4.5 12.724 4.72386 12.5001 5 12.5001C5.27614 12.5001 5.5 12.724 5.5 13.0001V13.5001H8.5C8.77615 13.5001 9 13.724 9 14.0001C9 14.2762 8.77615 14.5001 8.5 14.5001H5.5V15.0001C5.5 15.2762 5.27614 15.5001 5 15.5001Z" fill="#971C4E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 14.0001C20 13.724 20.2239 13.5001 20.5 13.5001H23.5V13.0001C23.5 12.724 23.7239 12.5001 24 12.5001C24.2761 12.5001 24.5 12.724 24.5 13.0001V15.0001C24.5 15.2762 24.2761 15.5001 24 15.5001C23.7239 15.5001 23.5 15.2762 23.5 15.0001V14.5001H20.5C20.2239 14.5001 20 14.2762 20 14.0001Z" fill="#971C4E"/>
</svg>`,
      contenido: 'Vacunas adicionales o específicas.',
    },
  ];


  menu = [
    {
      titulo: 'Home',
      icono: 'assets/images/home.svg', // Cambia al ícono real
    },
    {
      titulo: 'QR',
      icono: 'assets/images/qr.svg', // Cambia al ícono real
    },
    {
      titulo: 'Búsqueda',
      icono: 'assets/images/lupa.svg', // Cambia al ícono real
    },
    {
      titulo: 'Ubicación',
      icono: 'assets/images/ubicacion.svg', // Cambia al ícono real
    }
  ];


  isProfileVisible = false;

  toggleProfile() {
    this.isProfileVisible = !this.isProfileVisible;
  }

  // Método para seleccionar una pestaña
  selectTab(index: number) {
    this.selectedTabIndex = index;
  }

  selectMenu(index: number) {
    this.selectedMenuIndex = index;
  }
}


