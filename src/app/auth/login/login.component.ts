import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  hide = true;
  email = 'mail5@mail.com';
  password = '123456789';

  constructor( private authService: AuthService, private store: Store<AppState>, private router: Router ) { }

  ngOnInit() {
    this.store.select('user').subscribe( user => {
      if ( user.data != null ) { this.router.navigate(['']); }
    });
  }

  login(){
    console.log(this.email, this.password);
    this.authService.login(this.email,this.password);
  }

  ngOnDestroy(){

  }

}
