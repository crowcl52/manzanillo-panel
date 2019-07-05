import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../../client.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-client-servicios',
  templateUrl: './client-servicios.component.html',
  styleUrls: ['./client-servicios.component.scss']
})
export class ClientServiciosComponent implements OnInit {

  idClient = 0;
  clients = [];
  apiUrl = 'https://test1.wizi.mx//api/v1/';


  constructor(private rutaActiva: ActivatedRoute, private service: ClientService, public dialog: MatDialog) { }

  ngOnInit() {
    this.idClient = (this.rutaActiva.snapshot.params.id);
    this.service.getClientServices(this.idClient).subscribe((data:any) =>{
      console.log(data.data.items);
      this.clients = data.data.items;
    });
  }

  search(value) {
    console.log(value);
    this.service.searchClientServices(value,this.idClient).subscribe( data =>{
      console.log(data)
    } )
  }

  clientDetail(id) {
   console.log(id)
  }

  delete(item) {
    console.log(item)
  }

}
