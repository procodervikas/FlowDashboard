import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { AdminComponent } from './account/admin/admin.component';
import { AuthComponent} from './account/auth/auth.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: "login"
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
