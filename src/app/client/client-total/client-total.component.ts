import { Component, OnInit } from '@angular/core';
import { Filtered } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-total',
  templateUrl: './client-total.component.html',
  styleUrls: ['./client-total.component.css']
})
export class ClientTotalComponent implements OnInit {

  clients: Filtered[];
  filter = ''
  erro = false
  link: string;






  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    this.erro = false
    this.filter = event.target.value;
  }

  searchTotal() {
    if (this.filter === 'cidade') {
      this.ClientService.getClientsTotal('city').subscribe(res => {

        this.clients = res
      })
    } else if (this.filter === 'sexo') {
      this.ClientService.getClientsTotal('gender').subscribe(res => {

        this.clients = res
      })
    } else if (this.filter === 'especie') {
      this.ClientService.getClientsTotal('kind').subscribe(res => {

        this.clients = res
      })
    } else {
      this.erro = true
    }

  }

  objectVal(obj: Filtered) {
    return Object.values(obj)[0]
  }

  toMoney(val: number) {
    return val.toLocaleString('pt-br', {
      minimumFractionDigits: 2, style: 'currency', currency: 'BRL'
    })
  }

  export() {
    this.ClientService.exportClient().subscribe(res => {

      this.link = res.file
    })
  }
}
