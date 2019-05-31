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
    if (email && pass && (pass.length>=6)) {
      // tslint:disable-next-line:radix
      this.auth.createAccount(email, pass, name, parseInt(authLevel));
    }else if(pass.length<6){
      alert('Please enter a password with more than 6 characters!');
    }
     else {
      alert('Email and password are required!');
    }
  }


}
