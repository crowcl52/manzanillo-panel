import { Component, OnInit } from '@angular/core';
import { CotizacionesService } from './cotizaciones.service';
import { MatDialog } from '@angular/material/dialog';
import { CotizacionesDetailComponent } from './cotizaciones-detail/cotizaciones-detail.component';


@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss']
})
export class CotizacionesComponent implements OnInit {

  agentes = [];
  apiUrl = 'https://test1.wizi.mx//api/v1/';

  constructor(private service: CotizacionesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getQuotations().subscribe((services: any) => {
      this.agentes = services.data.items;
      console.log(this.agentes);
    })
  }

  search(value) {
    console.log(value);
    this.service.searchQuotations(value).subscribe(data => {
      console.log(data)
    })
  }

  delete(item) {
    console.log(item)
  }

  openModal(type) {
    const dialogRef = this.dialog.open(CotizacionesDetailComponent, {
      width: '1000px',
      height: '600px',
      data: { type }
    });
  }

}

