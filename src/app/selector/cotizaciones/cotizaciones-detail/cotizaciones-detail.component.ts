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
  formType = "A1";

  formA1builder = [
    { name: 'tariff fraction', formName: 'tariff_fraction', type: 'number' },
    { name: 'advalorem', formName: 'advalorem', type: 'number' },
    { name: 'iva', formName: 'iva', type: 'number' },
    { name: 'product description', formName: 'product_description', type: 'text' },
    { name: 'value cfr', formName: 'value_cfr', type: 'number' },
    { name: 'taxes base value', formName: 'taxes_base_value', type: 'number' },
    { name: 'taxes advalorem', formName: 'taxes_advalorem', type: 'number' },
    { name: 'taxes dta', formName: 'taxes_dta', type: 'number' },
    { name: 'taxes iva', formName: 'taxes_iva', type: 'number' },
    { name: 'taxes prevalidation', formName: 'taxes_prevalidation', type: 'number' },
    { name: 'taxes total', formName: 'taxes_total', type: 'number' },
    { name: 'expenses merchandise_insurance', formName: 'expenses_merchandise_insurance', type: 'number' },
    { name: 'expenses ground_freight', formName: 'expenses_ground_freight', type: 'number' },
    { name: 'expenses main_maneuvers', formName: 'expenses_main_maneuvers', type: 'number' },
    { name: 'expenses preliminary_recognition', formName: 'expenses_preliminary_recognition', type: 'number' },
    { name: 'expenses tax', formName: 'expenses_tax', type: 'number' },
    { name: 'expenses marketer', formName: 'expenses_marketer', type: 'number' },
    { name: 'expenses revalidation', formName: 'expenses_revalidation', type: 'number' },
    { name: 'expenses release_b_l', formName: 'expenses_release_b_l', type: 'number' },
    { name: 'expenses integral_package', formName: 'expenses_integral_package', type: 'number' },
    { name: 'expenses empty_container_delivery', formName: 'expenses_empty_container_delivery', type: 'number' },
    { name: 'expenses subtotal', formName: 'expenses_subtotal', type: 'number' },
    { name: 'expenses iva', formName: 'expenses_iva', type: 'number' },
    { name: 'expenses total complementary', formName: 'expenses_total_complementary', type: 'number' },
    { name: 'expenses fee', formName: 'expenses_fee', type: 'number' },
    { name: 'expenses fee iva', formName: 'expenses_fee_iva', type: 'number' },
    { name: 'expenses fee total', formName: 'expenses_fee_total', type: 'number' },
    { name: 'expenses final total', formName: 'expenses_final_total', type: 'number' },
    { name: 'total tax expenses', formName: 'total_tax_expenses', type: 'number' },
  ];

  formA4builder = [
    { name: 'include', formName: 'include', type: 'text' },
    { name: 'not_include', formName: 'not_include', type: 'text' },
  ];


  constructor(private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private _snackBar: MatSnackBar) { }

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

    this.A1FormGroup = this._formBuilder.group({
      tariff_fraction: ['', Validators.required],
      advalorem: ['', Validators.required],
      iva: ['', Validators.required],
      product_description: ['', Validators.required],
      value_cfr: ['', Validators.required],
      taxes_base_value: ['', Validators.required],
      taxes_advalorem: ['', Validators.required],
      taxes_dta: ['', Validators.required],
      taxes_iva: ['', Validators.required],
      taxes_prevalidation: ['', Validators.required],
      taxes_total: ['', Validators.required],
      expenses_merchandise_insurance: ['', Validators.required],
      expenses_ground_freight: ['', Validators.required],
      expenses_main_maneuvers: ['', Validators.required],
      expenses_preliminary_recognition: ['', Validators.required],
      expenses_tax: ['', Validators.required],
      expenses_marketer: ['', Validators.required],
      expenses_revalidation: ['', Validators.required],
      expenses_release_b_l: ['', Validators.required],
      expenses_integral_package: ['', Validators.required],
      expenses_empty_container_delivery: ['', Validators.required],
      expenses_subtotal: ['', Validators.required],
      expenses_iva: ['', Validators.required],
      expenses_total_complementary: ['', Validators.required],
      expenses_fee: ['', Validators.required],
      expenses_fee_iva: ['', Validators.required],
      expenses_fee_total: ['', Validators.required],
      expenses_final_total: ['', Validators.required],
      total_tax_expenses: ['', Validators.required],
    });

    this.A4FormGroup = this._formBuilder.group({
      include: ['', Validators.required],
      not_include: ['', Validators.required],
    });
  }


  saveInfo() {
    console.log(this.A1FormGroup.value)
  }


}

