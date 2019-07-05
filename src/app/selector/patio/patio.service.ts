import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatioService {

  apiUrl: string = 'https://test1.wizi.mx//api/v1/';
  servicesApi = 'services';

  token = '';

  constructor(private http: HttpClient, private store: Store<AppState>) {
    store.select('user').subscribe(user => {
      this.token = user.data.token;
    });
  }

  getServices() {
    let url = this.apiUrl + this.servicesApi;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }

  searchServices(value) {
    let url = `${this.apiUrl}${this.servicesApi}/users/search?q=${value}`;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }
  
}
