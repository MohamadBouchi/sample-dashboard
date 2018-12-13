import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(data => {
      if (data) {
        this.router.navigate(['/login']);
      }
    },
    error => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          this.router.navigate(['/register']);
        }
      }
    });
  }
}
