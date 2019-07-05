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

  //  dministrators/users/search?q=user number 2
  searchClientUsers(value) {
    let url = `${this.apiUrl}${this.clientApi}/users/search?q=${value}`;
    const Header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
  }

}
