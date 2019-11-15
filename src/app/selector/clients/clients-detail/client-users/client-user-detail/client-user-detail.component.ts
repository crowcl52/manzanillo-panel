import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/selector/administrators/admin.service';

@Component({
  selector: 'app-client-user-detail',
  templateUrl: './client-user-detail.component.html',
  styleUrls: ['./client-user-detail.component.scss']
})
export class ClientUserDetailComponent implements OnInit {
  
  img: any;
  firstFormGroup: FormGroup;

  constructor( private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private _snackBar: MatSnackBar, private service: AdminService ) { }

  ngOnInit() {
    let user = this.data.data;
    console.log(user)

    this.firstFormGroup = this._formBuilder.group({
      name: [user.fullName],
      email: [user.email],
      phone: [user.phone],
      role: [String(user.role.id)],
    });
  }

  getFile(event) {
    let file = event.target.files[0];
    this.img = file;
    let reader = new FileReader();
    reader.onload = this.fileOnload;
    reader.readAsDataURL(file);
  }

  fileOnload(e) {
    let result = e.target.result;
    document.getElementById("imgTag").setAttribute("src", result)
  }

  clickFile(id) {
    document.getElementById(id).click();
  }

  editUser(){
    this.service.editAdmin(this.firstFormGroup.value,this.data.data.id).subscribe(resp =>{
      console.log(resp)
      this.openSnackBar('Edit Success');
    },err => {
      console.log(err)
    })
  }

  openSnackBar(message: string, action: string = "Ok") {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
