import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() { }

  register(email: string, pass: string, name: string, authLevel: string) {
    if (email && pass) {
      // tslint:disable-next-line:radix
      this.auth.createAccount(email, pass, name, parseInt(authLevel));
    } else {
      alert('Email and password are required!');
    }
  }

}
