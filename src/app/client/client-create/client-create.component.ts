import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client = {
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
    birthday: ''
  }

  success = false
  link: string;

  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
  }

  createClient() {
    this.ClientService.postClient(this.client).subscribe(res => {
      this.success = true
    })

  }

  export() {
    this.ClientService.exportClient().subscribe(res => {

      this.link = res.file
    })
  }

}
