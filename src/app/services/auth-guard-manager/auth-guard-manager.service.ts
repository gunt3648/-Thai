import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthLevel } from './../../interfaces/auth-level/auth-level.enum';
import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardManagerService implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(): boolean {
    if (!this.auth.isLoggedIn || !this.auth.isManager) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
