import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, HomeComponent } from '../components';
import { AuthGuard } from '../guards';
import { RegisterComponent } from '../components/register/register.component';

const routes: Routes = [
  // {
  //     path: '',
  //     component: HomeComponent,
  //     canActivate: [AuthGuard]
  // },
  // {
  //     path: 'admin',
  //     component: AdminComponent,
  //     canActivate: [AuthGuard],
  //     data: { roles: [Role.Admin] }
  // },
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
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
