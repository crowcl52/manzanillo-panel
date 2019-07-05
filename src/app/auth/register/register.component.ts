import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterModalComponent } from './register-modal/register-modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModal(type) {
    const dialogRef = this.dialog.open(RegisterModalComponent, {
      width: '1000px',
      height: '600px',
      data: { type }
    });
  }

}
