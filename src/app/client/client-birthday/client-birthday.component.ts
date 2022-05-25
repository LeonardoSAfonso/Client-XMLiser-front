import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-birthday',
  templateUrl: './client-birthday.component.html',
  styleUrls: ['./client-birthday.component.css']
})
export class ClientBirthdayComponent implements OnInit {

  clients: [Client[], number];
  page = 1
  initial: string
  final: string
  erro = false
  link: string;

  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
  }

  onKeyInitial(event: any) {
    this.initial = event.target.value;
  }

  onKeyFinal(event: any) {
    this.final = event.target.value;
  }

  searchBirdthday() {
    const isoRegex = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i

    const initialDate = this.initial.split('/')
    const finalDate = this.final.split('/')

    const initial = isoRegex.test(new Date(`${initialDate[2]}-${initialDate[1]}-${initialDate[0]}`).toISOString())

    const final = isoRegex.test(new Date(`${finalDate[2]}-${finalDate[1]}-${finalDate[0]}`).toISOString())


    if (initial && final) {
      this.erro = false
      this.ClientService.getClientsByBirthday(this.page, new Date(`${initialDate[2]}-${initialDate[1]}-${initialDate[0]}`).toISOString(), new Date(`${finalDate[2]}-${finalDate[1]}-${finalDate[0]}`).toISOString()).subscribe(res => {

        this.clients = res
      })

    } else {
      this.erro = true
    }

  }

  fullBackward() {


    const isoRegex = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i

    const initialDate = this.initial.split('/')
    const finalDate = this.final.split('/')

    const initial = isoRegex.test(new Date(`${initialDate[2]}-${initialDate[1]}-${initialDate[0]}`).toISOString())

    const final = isoRegex.test(new Date(`${finalDate[2]}-${finalDate[1]}-${finalDate[0]}`).toISOString())

    if (initial && final) {
      this.erro = false
      this.page = 1
      this.ClientService.getClientsByBirthday(this.page, new Date(`${initialDate[2]}-${initialDate[1]}-${initialDate[0]}`).toISOString(), new Date(`${finalDate[2]}-${finalDate[1]}-${finalDate[0]}`).toISOString()).subscribe(res => {

        this.clients = res
      })


    } else {
      this.erro = true
    }
  }

  backward() {

    const isoRegex = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i

    const initialDate = this.initial.split('/')
    const finalDate = this.final.split('/')

    const initial = isoRegex.test(new Date(`${initialDate[2]}-${initialDate[1]}-${initialDate[0]}`).toISOString())

    const final = isoRegex.test(new Date(`${finalDate[2]}-${finalDate[1]}-${finalDate[0]}`).toISOString())

    if (initial && final) {
      this.erro = false
      if (this.page > 1) {
        this.page--
      }

      this.ClientService.getClientsByBirthday(this.page, new Date(`${initialDate[2]}-${initialDate[1]}-${initialDate[0]}`).toISOString(), new Date(`${finalDate[2]}-${finalDate[1]}-${finalDate[0]}`).toISOString()).subscribe(res => {

        this.clients = res
      })


    } else {
      this.erro = true
    }
  }

  forward() {

    const isoRegex = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i

    const initialDate = this.initial.split('/')
    const finalDate = this.final.split('/')

    const initial = isoRegex.test(new Date(`${initialDate[2]}-${initialDate[1]}-${initialDate[0]}`).toISOString())

    const final = isoRegex.test(new Date(`${finalDate[2]}-${finalDate[1]}-${finalDate[0]}`).toISOString())

    if (initial && final) {
      this.erro = false
      if (this.page < this.clients[1]) {
        this.page++
      }

      this.ClientService.getClientsByBirthday(this.page, new Date(`${initialDate[2]}-${initialDate[1]}-${initialDate[0]}`).toISOString(), new Date(`${finalDate[2]}-${finalDate[1]}-${finalDate[0]}`).toISOString()).subscribe(res => {

        this.clients = res
      })


    } else {
      this.erro = true
    }
  }

  fullForward() {

    const isoRegex = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i

    const initialDate = this.initial.split('/')
    const finalDate = this.final.split('/')

    const initial = isoRegex.test(new Date(`${initialDate[2]}-${initialDate[1]}-${initialDate[0]}`).toISOString())

    const final = isoRegex.test(new Date(`${finalDate[2]}-${finalDate[1]}-${finalDate[0]}`).toISOString())

    if (initial && final) {
      this.erro = false
      this.page = this.clients[1]

      this.ClientService.getClientsByBirthday(this.page, new Date(`${initialDate[2]}-${initialDate[1]}-${initialDate[0]}`).toISOString(), new Date(`${finalDate[2]}-${finalDate[1]}-${finalDate[0]}`).toISOString()).subscribe(res => {

        this.clients = res
      })


    } else {
      this.erro = true
    }
  }

  toLocaleDate(date: string) {
    return new Date(date).toLocaleDateString()
  }

  export() {
    this.ClientService.exportClient().subscribe(res => {

      this.link = res.file
    })
  }

  log(val: unknown) { console.log(val); }

}
