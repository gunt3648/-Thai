import { Subscription } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from 'firebase';

import { UserDataService } from './../user-data/user-data.service';
import { UserInformation } from './../../interfaces/user/user';
import { AuthLevel } from 'src/app/interfaces/auth-level/auth-level.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private user: User;
  private subscription: Subscription[] = [];

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private userData: UserDataService
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.forEach((subscribe: Subscription) => {
      subscribe.unsubscribe();
    });
  }

  public async login(email: string, password: string) {
    try {
      const lowerCaseEmail = email.toLowerCase();
      await this.afAuth.auth.signInWithEmailAndPassword(lowerCaseEmail, password);
      await this.setAuthLevel();
      this.router.navigate(['/home']);
    } catch (e) {
      console.log('Something went wrong...');
    }
  }

  private setAuthLevel() {
    const email = JSON.parse(localStorage.getItem('user')).email;
    this.subscription.push(
      this.userData.getUserAuthLevelByEmail(email).subscribe(result => {
        // console.log('Setting auth level to', result);
        if (result) {
          localStorage.setItem('auth-level', `${result}`);
        } else {
          localStorage.setItem('auth-level', null);
        }
      })
    );
  }

  public get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  public get isManager(): boolean {
    // tslint:disable-next-line:radix
    const currentAuthLevel: AuthLevel = parseInt(localStorage.getItem('auth-level'));
    return currentAuthLevel === AuthLevel.Manager;
  }

  public async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('auth-level');
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
