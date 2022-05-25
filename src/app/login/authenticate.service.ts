import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authenticate } from './authenticate.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  postAuthenticate(email: string, password: string): Observable<Authenticate> {
    return this.http.post<Authenticate>(`http://localhost:3359/authenticate`, {
      email, password
    })
  }
}



