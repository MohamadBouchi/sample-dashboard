import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  invalid = false;
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['/register']);
  }
  login() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          sessionStorage.setItem('token', res.token);
          this.router.navigate(['/start']);
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.invalid = true;
            }
          }
        }
      );
  }
}
