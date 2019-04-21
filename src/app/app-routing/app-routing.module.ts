import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components';
import { AuthGuard } from '../guards';
import { RegisterComponent } from '../components/register/register.component';
import { MatLoginComponent } from '../components/mat-login/mat-login.component';
import { MatRegisterComponent } from '../components/mat-register/mat-register.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,    
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: MatLoginComponent
  },
  {
    path: 'register',
    component: MatRegisterComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
