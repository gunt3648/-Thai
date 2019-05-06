import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(): boolean {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
