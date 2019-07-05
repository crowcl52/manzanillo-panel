import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {

  apiUrl: string = 'https://test1.wizi.mx//api/v1/';
  cotiApi = 'quotations';

  token = '';

  constructor(private http: HttpClient, private store: Store<AppState>) {
    store.select('user').subscribe(user => {
      this.token = user.data.token;
    });
  }

  getQuotations() {
    let url = this.apiUrl + this.cotiApi;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }

  searchQuotations(value) {
    let url = `${this.apiUrl}${this.cotiApi}/search?q=${value}`;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }
  
}