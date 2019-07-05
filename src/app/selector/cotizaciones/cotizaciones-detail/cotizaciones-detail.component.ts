import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cotizaciones-detail',
  templateUrl: './cotizaciones-detail.component.html',
  styleUrls: ['./cotizaciones-detail.component.scss']
})
export class CotizacionesDetailComponent implements OnInit {

  newFormGroup: FormGroup;
  A4FormGroup: FormGroup;
  A1FormGroup: FormGroup;


  constructor( private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private _snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.newFormGroup = this._formBuilder.group({
      clienteCtrl: ['', Validators.required],
      etaCtrl: ['', Validators.required],
      equipoCtrl: ['', Validators.required],
      atnCtrl: ['', Validators.required],
      facturaCtrl: ['', Validators.required],
      referenciaCtrl: ['', Validators.required],
      buqueCtrl: ['', Validators.required],
      incotermCtrl: ['', Validators.required],
      destinoCtrl: ['', Validators.required],
      valorDolaresCtrl: ['', Validators.required],
      valorComercialCtrl: ['', Validators.required],
      valorFleteCtrl: ['', Validators.required],
      GastosCtrl: ['', Validators.required],
      ValorAduanasCtrl: ['', Validators.required],
      tipoCtrl: ['', Validators.required],
    });
  }

}
