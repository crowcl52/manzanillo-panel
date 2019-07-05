import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentesService } from './agentes.service';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss']
})
export class AgentesComponent implements OnInit {

  agentes = [];
  apiUrl = 'https://test1.wizi.mx//api/v1/';

  constructor(private service: AgentesService, private router: Router) { }

  ngOnInit() {
    this.service.getAgentesAduanales().subscribe((services: any) => {
      this.agentes = services.data.items;
      console.log(this.agentes);
    })
  }

  search(value) {
    console.log(value);
    this.service.searchAgentes(value).subscribe( data =>{
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
