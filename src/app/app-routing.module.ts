import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent} from './account/register/register.component'
import {DashboardComponent} from './account/dashboard/dashboard.component'

const routes: Routes = [
  {
    component: LoginComponent,
    path: "login"
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    component: DashboardComponent,
    path: "dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
