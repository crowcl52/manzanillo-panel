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
import { ServiciosComponent } from './selector/servicios/servicios.component';
import { CotizacionesComponent } from './selector/cotizaciones/cotizaciones.component';
import { AgentesComponent } from './selector/agentes/agentes.component';
import { PatioComponent } from './selector/patio/patio.component';
import { DashbordsComponent } from './selector/dashbords/dashbords.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '', component: SelectorComponent, canActivate: [AuthGuardService], children: [
      { path: '', component: AdminTypeComponent },
      { path: 'administradores', component: AdministratorsComponent },
      { path: 'clientes', component: ClientsComponent },
      { path: 'clientes/:id', component: ClientsDetailComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'cotizaciones', component: CotizacionesComponent },
      { path: 'agentes-aduanales', component: AgentesComponent },
      { path: 'patio-maniobras', component: PatioComponent },
      { path: 'estadisticas', component: DashbordsComponent },
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
