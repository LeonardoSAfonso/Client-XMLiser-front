import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: [Client[], number];
  page = 1
  search = ''
  link = ''




  constructor(private ClientService: ClientService, private Router: Router) { }

  ngOnInit(): void {
    this.ClientService.getClients(this.page).subscribe(res => {

      this.clients = res
      console.log(this.clients[0])
    })
  }

  onKey(event: any) {
    this.search = event.target.value;
    console.log(this.search)
  }

  searchName() {
    this.ClientService.getClientsByName(this.page, this.search).subscribe(res => {

      this.clients = res
    })
  }

  fullBackward() {
    this.page = 1

    this.ClientService.getClientsByName(this.page, this.search).subscribe(res => {

      this.clients = res
      console.log(this.clients[0])
    })
  }

  backward() {
    if (this.page > 1) {
      this.page--
    }

    this.ClientService.getClientsByName(this.page, this.search).subscribe(res => {

      this.clients = res
      console.log(this.clients[0])
    })
  }

  forward() {
    if (this.page < this.clients[1]) {
      this.page++
    }

    this.ClientService.getClientsByName(this.page, this.search).subscribe(res => {

      this.clients = res
      console.log(this.clients[0])
    })
  }

  fullForward() {

    this.page = this.clients[1]

    this.ClientService.getClientsByName(this.page, this.search).subscribe(res => {

      this.clients = res
      console.log(this.clients[0])
    })
  }

  toLocaleDate(date: string) {
    return new Date(date).toLocaleDateString()
  }

  viewOne(id: number) {
    localStorage.setItem('clientId', String(id))
    this.Router.navigate(['client-one'])
  }

  export() {
    this.ClientService.exportClient().subscribe(res => {

      this.link = res.file
    })
  }


  log(val: unknown) { console.log(val); }

}
