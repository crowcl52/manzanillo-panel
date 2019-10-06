import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { DeactivateUserAction } from 'src/redux/user.actions';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  constructor( private store: Store<AppState>, private route: Router ) { }

  ngOnInit() {
  }

  logout(){
    this.store.dispatch( new DeactivateUserAction() );
    this.route.navigate( ['/login'] );
  }

}
