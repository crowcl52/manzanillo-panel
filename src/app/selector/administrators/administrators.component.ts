import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { MatDialog } from '@angular/material/dialog';
import { AdministraitorsDetailComponent } from './administraitors-detail/administraitors-detail.component';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.scss']
})
export class AdministratorsComponent implements OnInit {

  administradores = [];
  apiUrl = 'https://test1.wizi.mx//api/v1/';

  constructor( private adminService: AdminService, public dialog: MatDialog ) { }

  ngOnInit() {
    this.adminService.getAdminUSers().subscribe((data:any) => {
      this.administradores = data.data.items;
      console.log(this.administradores)
    })
  }

  search(value){
    this.adminService.searchAdminUSers(value).subscribe((data: any) => {
      this.administradores = data.data.items;
      console.log(data.data.items)
    })
  }

  delete(item){
    console.log(item)
  }

  openModal(type) {
    const dialogRef = this.dialog.open(AdministraitorsDetailComponent, {
      width: '1000px',
      height: '600px',
      data: { type }
    });
  }

}
