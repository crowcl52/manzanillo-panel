import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  empresaImg: any;
  adminImg: any;

  constructor(private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data,
    private service: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      telCtrl: ['', Validators.required],
      webCtrl: ['', Validators.required],
      ciudadCtrl: ['', Validators.required],
      estadoCtrl: ['', Validators.required],
      paisCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      passCtrl: ['', Validators.required],
      telCtrl: ['', Validators.required],
    });
  }

  clickFile(id) {
    document.getElementById(id).click();
  }

  getFile(event) {
    let file = event.target.files[0];
    this.empresaImg = file;
    let reader = new FileReader();
    reader.onload = this.fileOnload;
    reader.readAsDataURL(file);
  }

  fileOnload(e) {
    let result = e.target.result;
    document.getElementById("imgTag").setAttribute("src", result)
  }

  getFile2(event) {
    let file = event.target.files[0];
    this.adminImg = file;
    let reader = new FileReader();
    reader.onload = this.fileOnload2;
    reader.readAsDataURL(file);
  }

  fileOnload2(e) {
    let result = e.target.result;
    document.getElementById("imgTag2").setAttribute("src", result)
  }

  sendInfo() {
    console.log(this.firstFormGroup.value)
    console.log(this.secondFormGroup.value)

    let form = new FormData();
    form.append('user_fullName', this.secondFormGroup.value.nameCtrl);
    form.append('user_role', '1');
    form.append('user_phone', this.secondFormGroup.value.telCtrl);
    form.append('user_email', this.secondFormGroup.value.emailCtrl);
    form.append('user_password', this.secondFormGroup.value.passCtrl);
    form.append('user_type', '2');
    form.append('company_name', this.firstFormGroup.value.nameCtrl);
    form.append('company_email', this.firstFormGroup.value.emailCtrl);
    form.append('company_phone', this.firstFormGroup.value.telCtrl);
    form.append('company_city', this.firstFormGroup.value.ciudadCtrl);
    form.append('company_state', this.firstFormGroup.value.estadoCtrl);
    form.append('company_country', this.firstFormGroup.value.paisCtrl);
    form.append('company_website', this.firstFormGroup.value.webCtrl);
    form.append('company_media_source', this.empresaImg);
    form.append('user_media_source', this.adminImg);

    this.service.register(this.data.type, form).subscribe(data => {
      this._snackBar.open('Tu registro ha sido completado', 'Cerrar', {
        duration: 2000,
      });

    }, err => {
      this._snackBar.open('Ha ocurrido un error', 'Cerrar', {
        duration: 2000,
      });
    })

  }

}
