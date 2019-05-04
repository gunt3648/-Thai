import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn;
  }

  get isManager(): boolean {
    return this.auth.isManager;
  }

  logout() {
    this.auth.logout();
  }

}
