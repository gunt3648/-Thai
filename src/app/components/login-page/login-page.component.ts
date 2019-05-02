import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
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
