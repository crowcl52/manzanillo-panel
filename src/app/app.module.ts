import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import { LoginComponent } from './auth/login/login.component';
import { StoreModule } from '@ngrx/store';
import { ChartsModule } from 'ng2-charts';
import { appReducer } from './app.reducer';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectorComponent } from './selector/selector.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterModalComponent } from './auth/register/register-modal/register-modal.component';
import { AdminTypeComponent } from './selector/admin-type/admin-type.component';
import { AdministratorsComponent } from './selector/administrators/administrators.component';
import { AdministraitorsDetailComponent } from './selector/administrators/administraitors-detail/administraitors-detail.component';
import { ClientsComponent } from './selector/clients/clients.component';
import { ClientsDetailComponent } from './selector/clients/clients-detail/clients-detail.component';
import { ClientDataComponent } from './selector/clients/clients-detail/client-data/client-data.component';
import { ClientUsersComponent } from './selector/clients/clients-detail/client-users/client-users.component';
import { ClientCotizacionesComponent } from './selector/clients/clients-detail/client-cotizaciones/client-cotizaciones.component';
import { ClientServiciosComponent } from './selector/clients/clients-detail/client-servicios/client-servicios.component';
import { ClientUserDetailComponent } from './selector/clients/clients-detail/client-users/client-user-detail/client-user-detail.component';
import { CotizacionesComponent } from './selector/cotizaciones/cotizaciones.component';
import { AgentesComponent } from './selector/agentes/agentes.component';
import { PatioComponent } from './selector/patio/patio.component';
import { DashbordsComponent } from './selector/dashbords/dashbords.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectorComponent,
    RegisterComponent,
    RegisterModalComponent,
    AdminTypeComponent,
    AdministratorsComponent,
    AdministraitorsDetailComponent,
    ClientsComponent,
    ClientsDetailComponent,
    ClientDataComponent,
    ClientUsersComponent,
    ClientCotizacionesComponent,
    ClientServiciosComponent,
    ClientUserDetailComponent,
    CotizacionesComponent,
    AgentesComponent,
    PatioComponent,
    DashbordsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ChartsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    RegisterModalComponent,
    AdministraitorsDetailComponent,
    ClientUserDetailComponent
  ]
})
export class AppModule { }
