import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../../client.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientUserDetailComponent } from './client-user-detail/client-user-detail.component';


@Component({
  selector: 'app-client-users',
  templateUrl: './client-users.component.html',
  styleUrls: ['./client-users.component.scss']
})
export class ClientUsersComponent implements OnInit {

  idClient = 0;
  clients = [];
  apiUrl = 'https://test1.wizi.mx//api/v1/';


  constructor(private rutaActiva: ActivatedRoute, private service: ClientService, public dialog: MatDialog) { }

  ngOnInit() {
    this.idClient = (this.rutaActiva.snapshot.params.id);
    this.service.getClientBusiness(this.idClient).subscribe((data:any) =>{
      console.log(data.data.items);
      this.clients = data.data.items;
    });
  }

  search(value) {
    console.log(value);
    this.service.searchClientBusiness(value,this.idClient).subscribe( data =>{
      console.log(data)
    } )
  }

  clientDetail(id) {
    const dialogRef = this.dialog.open(ClientUserDetailComponent, {
      width: '1000px',
      height: '600px',
      data: { id }
    });
  }

  delete(item) {
    console.log(item)
  }

}
