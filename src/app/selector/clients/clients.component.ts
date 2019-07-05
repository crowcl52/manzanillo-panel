import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients = [];
  apiUrl = 'https://test1.wizi.mx//api/v1/';

  constructor(private service: ClientService, private router: Router) { }

  ngOnInit() {
    this.service.getClientUsers().subscribe((clients: any) => {
      this.clients = clients.data.items;
      console.log(this.clients);
    })
  }

  search(value) {
    console.log(value);
    this.service.searchClientUsers(value).subscribe( data =>{
      console.log(data)
    } )
  }

  clientDetail(id) {
    console.log(id)
    this.router.navigate(['/clientes',id]);
  }

  delete(item) {
    console.log(item)
  }

}
