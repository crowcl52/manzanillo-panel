import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-administraitors-detail',
  templateUrl: './administraitors-detail.component.html',
  styleUrls: ['./administraitors-detail.component.scss']
})
export class AdministraitorsDetailComponent implements OnInit {
  
  img: any;
  firstFormGroup: FormGroup;

  constructor( private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private _snackBar: MatSnackBar ) { }

  ngOnInit() {
    console.log(this.data)
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      role: ['', Validators.required],
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

}
