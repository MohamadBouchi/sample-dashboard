import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserstableService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get <any>('http://localhost:4001/users/');
  }
}
