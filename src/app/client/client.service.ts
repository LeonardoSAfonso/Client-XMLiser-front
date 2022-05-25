import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, InsertClient, ExportedClient, Filtered } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClientsByName(page: number, name: string): Observable<[Client[], number]> {
    return this.http.get<[Client[], number]>(`http://localhost:3359/client-name?name=${name}&offset=${(page - 1) * 8}&limit=8`, { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` } })
  }

  getClientsByBirthday(page: number, initial: string, final: string): Observable<[Client[], number]> {
    return this.http.get<[Client[], number]>(`http://localhost:3359/client-birthday?initial=${initial}&final=${final}&offset=${(page - 1) * 8}&limit=8`, { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` } })
  }

  getClientsTotal(filter: string): Observable<Filtered[]> {
    return this.http.get<Filtered[]>(`http://localhost:3359/client-total?filter=${filter}`, { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` } })
  }

  getClients(page: number): Observable<[Client[], number]> {
    return this.http.get<[Client[], number]>(`http://localhost:3359/clients?offset=${(page - 1) * 8}&limit=8`, { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` } })
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`http://localhost:3359/client/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` } })
  }

  postClient(data: InsertClient): Observable<Client> {
    return this.http.post<Client>(`http://localhost:3359/client`, data, { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` } })
  }

  postImport(data: FormData): Observable<string> {
    return this.http.post<string>(`http://localhost:3359/client-import`, data, { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` } })
  }

  updateClient(data: InsertClient): Observable<Client> {
    return this.http.put<Client>(`http://localhost:3359/client`, data, { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` } })
  }

  deleteClient(id: number): Observable<string> {
    return this.http.delete<string>(`http://localhost:3359/client/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` } })
  }

  exportClient(): Observable<ExportedClient> {
    return this.http.get<ExportedClient>(`http://localhost:3359/client-export`, { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` } })
  }


}
