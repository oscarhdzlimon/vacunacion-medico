import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReportComponent } from './components/report/report.component';
import { authGuard } from './guards/auth.guard';



export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard]},
  { path: 'report' ,component: ReportComponent}
];
