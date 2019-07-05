import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from './servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  services = [];
  apiUrl = 'https://test1.wizi.mx//api/v1/';

  constructor(private service: ServiciosService, private router: Router) { }

  ngOnInit() {
    this.service.getServices().subscribe((services: any) => {
      this.services = services.data.items;
      console.log(this.services);
    })
  }

  search(value) {
    console.log(value);
    this.service.searchServices(value).subscribe( data =>{
      console.log(data)
    } )
  }

  serviceDetail(id) {
    console.log(id)
  }

  delete(item) {
    console.log(item)
  }

}
