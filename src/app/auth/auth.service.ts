import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { Subscription } from 'rxjs';
import { ActivateUserAction, DeactivateUserAction } from 'src/redux/user.actions';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // apiUrl: string = 'https://mznapi.beesoftware.mx/api/v1/core/';
  apiUrl: string = 'https://test1.wizi.mx//api/v1/core/';
  userUrl: string = 'users/auth/local/signin/general';
  singupUrl = 'users/auth/local/signup/';

  user: User = null;

  constructor(private http: HttpClient, private store: Store<AppState>, private route: Router) { }

  loginSubscription: Subscription = new Subscription();

  login(email, password) {
    const url = `${this.apiUrl}${this.userUrl}`;
    const credential = { email, password };
    this.loginSubscription = this.http.post(url, credential).subscribe((data: any) => {
      this.user = data.data.items[0];
      this.store.dispatch(new ActivateUserAction({ ...data.data.items[0] }));
      this.route.navigate(['']);
    })
  }

  register(type, user) {
    let url = '';
    switch (type) {
      case 'cliente':
        url = `${this.apiUrl}${this.singupUrl}client`;
        console.log('cliente')
        return this.http.post(url, user);
        break;
      case 'agencia':
        url = `${this.apiUrl}${this.singupUrl}customs`;
        console.log('agencia')
        return this.http.post(url, user);
        break;
      case 'patio':
        url = `${this.apiUrl}${this.singupUrl}railyard`;
        console.log('railyard')
        return this.http.post(url, user);
        break;
      default:
        break;
    }

  }

  isAuth(): boolean {
    if (this.user != null) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }

  logout() {
    this.loginSubscription.unsubscribe();
    this.store.dispatch(new DeactivateUserAction());
  }

}
