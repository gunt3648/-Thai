import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from 'firebase';

import { UserInformation } from './../../interfaces/user/user';
import { AuthLevel } from 'src/app/interfaces/auth-level/auth-level.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  public async login(email: string, password: string) {
    try {
      const lowerCaseEmail = email.toLowerCase();
      await this.afAuth.auth.signInWithEmailAndPassword(lowerCaseEmail, password);
      this.router.navigate(['/home']);
    } catch (e) {
      console.log('Something went wrong...');
    }
  }

  public async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  public async createAccount(email: string, password: string, name: string) {
    try {
      const lowerCaseEmail = email.toLowerCase();
      await this.afAuth.auth.createUserWithEmailAndPassword(lowerCaseEmail, password);
      await this.addEmployee(lowerCaseEmail, name);
    } catch (e) {
      console.log('Something went wrong...');
    }
  }

  public get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  private addEmployee(email: string, name: string) {
    const itemsRef = this.db.list('users');
    const userInformation: UserInformation = {
      email,
      name,
      authLevel: AuthLevel.Employee
    }
    itemsRef.push(userInformation);
  }
}
