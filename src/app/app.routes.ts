import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReportComponent } from './components/report/report.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';



export const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent,
     canActivate: [authGuard]
    },
  { path: 'report' ,component: ReportComponent,
  //  canActivate: [authGuard]
  },
  { path: '**', redirectTo: "login"}
];
