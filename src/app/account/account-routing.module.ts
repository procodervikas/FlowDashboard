import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NavigationComponent } from './navigation/navigation.component'

const routes: Routes = [
  {
    component: LoginComponent,
    path: "login"
  },
  {
    component: RegisterComponent,
    path: "register"
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    component: DashboardComponent,
    path: "dashboard"
  },
  {
    path: "nav",
    component: NavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,CommonModule]
})
export class AccountRoutingModule { }
