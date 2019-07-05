import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl: string = 'https://test1.wizi.mx//api/v1/';
  clientApi = 'clients';

  token = '';

  constructor(private http: HttpClient, private store: Store<AppState>) {
    store.select('user').subscribe(user => {
      this.token = user.data.token;
    });
  }

  getClientUsers() {
    let url = this.apiUrl + this.clientApi;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }

  searchClientUsers(value) {
    let url = `${this.apiUrl}${this.clientApi}/users/search?q=${value}`;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }
  // Empresa clientes
  getClientBusiness(id) {
    let url = `${this.apiUrl}${this.clientApi}/${id}/users`;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }

  searchClientBusiness(value, id) {
    let url = `${this.apiUrl}${this.clientApi}/${id}/users/search?q=${value}`;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }

  // Cliente cotizacion
  getClientQuotations(id) {
    let url = `${this.apiUrl}${this.clientApi}/${id}/quotations`;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }

  searchClientQuotations(value, id) {
    let url = `${this.apiUrl}${this.clientApi}/${id}/quotations/search?q=${value}`;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }

  // Cliente Servicios {{SERVER}}/api/v1/clients/1/services
  getClientServices(id) {
    let url = `${this.apiUrl}${this.clientApi}/${id}/services`;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }

  searchClientServices(value, id) {
    let url = `${this.apiUrl}${this.clientApi}/${id}/services/search?q=${value}`;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }


}
