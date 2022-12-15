import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environment/environment';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string = `${environment.API_URL}/login`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {}

   login(login: Login): Observable<any> {
     return this.http.post<Login>(this.url, login, this.httpOptions);
   }
}
