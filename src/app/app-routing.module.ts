import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SelectorComponent } from './selector/selector.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { RegisterComponent } from './auth/register/register.component';
import { AdminTypeComponent } from './selector/admin-type/admin-type.component';
import { AdministratorsComponent } from './selector/administrators/administrators.component';
import { ClientsComponent } from './selector/clients/clients.component';
import { ClientsDetailComponent } from './selector/clients/clients-detail/clients-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '', component: SelectorComponent, canActivate: [AuthGuardService], children: [
      { path: '', component: AdminTypeComponent },
      { path: 'administradores', component: AdministratorsComponent },
      { path: 'clientes', component: ClientsComponent },
      { path: 'clientes/:id', component: ClientsDetailComponent },
      { path: '**', redirectTo: '' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
