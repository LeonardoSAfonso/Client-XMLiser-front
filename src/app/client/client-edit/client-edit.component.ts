import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  client = {
    id: 0,
    name: '',
    cpf: '',
    marital_status: 0,
    father: '',
    mother: '',
    partner: '',
    rg: '',
    salary: '',
    kind: '',
    electoral_card: '',
    gender: '',
    cellphone: '',
    zipcode: '',
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    email: '',
    birthday: '',
    createdAt: '',
    updatedAt: ''
  }

  success = false
  link: string;

  constructor(private ClientService: ClientService, private Router: Router) { }

  ngOnInit(): void {
    this.ClientService.getClient(Number(localStorage.getItem('clientId'))).subscribe(res => {
      this.client = res
    })
  }

  updateClient() {
    this.ClientService.updateClient(this.client).subscribe(res => {
      this.client = res
      this.success = true
    })

  }

  deleteClient() {
    this.ClientService.deleteClient(Number(localStorage.getItem('clientId'))).subscribe(res => {
      localStorage.setItem('clientId', '')
      this.Router.navigate(['client'])
    })

  }

  export() {
    this.ClientService.exportClient().subscribe(res => {

      this.link = res.file
    })
  }
}
