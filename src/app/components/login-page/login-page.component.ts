import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }

  login(email: string, pass: string) {
    if (email && pass) {
      this.auth.login(email, pass);
    } else {
      alert('Email and password are required!')
    }
  }

  logout() {
    this.auth.logout();
  }

  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn;
  }

}
