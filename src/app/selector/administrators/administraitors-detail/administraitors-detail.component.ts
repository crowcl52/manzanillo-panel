import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-administraitors-detail',
  templateUrl: './administraitors-detail.component.html',
  styleUrls: ['./administraitors-detail.component.scss']
})
export class AdministraitorsDetailComponent implements OnInit {

  img: any;
  firstFormGroup: FormGroup;
  isEdit: boolean = false;

  constructor( private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private _snackBar: MatSnackBar, private service: AdminService ) { }

  ngOnInit() {
    console.log(this.data)
    this.isEdit = this.data.type == null ? false : true;
    console.log(this.isEdit)


    let name = this.isEdit ? this.data.type.fullName : '';
    let email = this.isEdit ? this.data.type.email : '';
    let phone = this.isEdit ? this.data.type.phone : '';

    this.firstFormGroup = this._formBuilder.group({
      fullName: [name, Validators.required],
      email: [email, Validators.required],
      phone: [phone],
      password: ['', Validators.required],
      role: ['2', Validators.required],
      user_type: ['1'],
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

  saveAdmin(){
    console.log(this.firstFormGroup.value,this.firstFormGroup.valid)
    console.log(this.img)
    this.service.saveAdmin(this.firstFormGroup.value).subscribe(resp =>{
      this.openSnackBar("User created","Ok")
    },err =>{
      console.log(err)
      this.openSnackBar("Something was wrong","Ok")

    })
  }

  editAdmin(){
    console.log(this.firstFormGroup.value,this.firstFormGroup.valid, this.data.type.id)
    this.service.editAdmin(this.firstFormGroup.value, this.data.type.id ).subscribe(resp =>{
      this.openSnackBar("User Edited","Ok")
    },err =>{
      console.log(err)
      this.openSnackBar("Something was wrong","Ok")
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
