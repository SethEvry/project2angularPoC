import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  };
  private url: string = `${environment.API_URL}/users`;

  constructor(private http: HttpClient) {}

  getUsers(jwt:string):Observable<User[]> {
    this.httpOptions.headers = this.httpOptions.headers.append('Authorization', jwt)
    return this.http.get<User[]>(this.url, this.httpOptions);
  }

}
