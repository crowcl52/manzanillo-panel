import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl: string = 'https://test1.wizi.mx//api/v1/';
  adminUrl = 'administrators';
  token = '';


  constructor( private http: HttpClient, private store: Store<AppState> ) {
    store.select('user').subscribe(user =>{
      this.token = user.data.token;
    });
   }

   getAdminUSers(){
    let url = this.apiUrl+this.adminUrl;
    const Header = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
   }
  //  dministrators/users/search?q=user number 2
   searchAdminUSers(value){
    let url = `${this.apiUrl}${this.adminUrl}/users/search?q=${value}`;
    const Header = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    });
    return this.http.get(url, { headers: Header });
   }

}
