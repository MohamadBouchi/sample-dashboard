import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = 'http://localhost:4001/login';
  private _registerUrl = 'http://localhost:4001/register';
  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  loggedIn() {
    return !!sessionStorage.getItem('token');
  }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }
}
