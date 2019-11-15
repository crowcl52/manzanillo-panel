import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.scss']
})
export class ClientDataComponent implements OnInit {
  
  img: any;
  firstFormGroup: FormGroup;
  client:any = "";
  id:any = "";

  constructor( private _formBuilder: FormBuilder, private _snackBar: MatSnackBar, 
    private service:ClientService ,private route: ActivatedRoute ) { }

  ngOnInit() {
    
   this.service.getClientData(this.route.snapshot.paramMap.get("id")).subscribe((client:any)=>{
     this.client = client.data.items[0];
     console.log(this.client)

     this.firstFormGroup = this._formBuilder.group({
      name: [this.client.name],
      email: [this.client.email],
      bank_name: [this.client.bank_name],
      bank_account: [this.client.bank_account],
      bank_key: [this.client.bank_key],
      business_name: [this.client.business_name],
      country: [this.client.country],
      state: [this.client.state],
      city: [this.client.city],
      website: [this.client.website],
      phone: [this.client.phone],
    });

   })

   this.id = this.route.snapshot.paramMap.get("id");

   this.firstFormGroup = this._formBuilder.group({
    name: [this.client.name],
    email: [this.client.email],
    bank_name: [this.client.bank_name],
    bank_account: [this.client.bank_account],
    bank_key: [this.client.bank_key],
    business_name: [this.client.business_name],
    country: [this.client.country],
    state: [this.client.state],
    city: [this.client.city],
    website: [this.client.website],
    phone: [this.client.phone],
  });

  }

  getFile(event) {
    let file = event.target.files[0];
    this.img = file;
    let reader = new FileReader();
    reader.onload = this.fileOnload;
    reader.readAsDataURL(file);
  }

  fileOnload(e) {
    let result = e.target.result;
    document.getElementById("imgTag").setAttribute("src", result)
  }

  clickFile(id) {
    document.getElementById(id).click();
  }

  editClient(){
    console.log(this.firstFormGroup.value);
    this.service.editClientData(this.firstFormGroup.value,this.id).subscribe(resp =>{
      console.log(resp)
      this.openSnackBar("Edit Success");
    })
  }

  openSnackBar(message: string, action: string = "Ok") {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}

