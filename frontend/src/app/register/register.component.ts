import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

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

  registerUser(registerForm: NgForm) {
    this._auth.registerUser(this.registerUserData).subscribe(data => {
      if (data) {
        this.router.navigate(['/login']);
      }
    },
    error => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 500) {
          registerForm.reset();
          this.router.navigate(['/register']);
        }
      }
    });
  }
}
