import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscription } from 'rxjs';
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
    private http: HttpClient,
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
      console.log(e);
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

  public get loggingInAccount(): string {
    return JSON.parse(localStorage.getItem('user')).email;
  }

  public async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('auth-level');
    this.router.navigate(['/']);
  }

  public async createAccount(email: string, password: string, name: string, authLevel: number) {
    try {
      const lowerCaseEmail = email.toLowerCase();
      await this.subscription.push(
        this.http.post('https://us-central1-atthai-a950a.cloudfunctions.net/register', {
          email: lowerCaseEmail,
          pass: password,
          key: 'Ah56iU7AvL09M2qwi1B'
        }).subscribe()
      );
      await this.addAccount(lowerCaseEmail, name, authLevel);
    } catch (e) {
      console.log(e);
    }
  }

  private addAccount(email: string, name: string, authLevel: number) {
    const itemsRef = this.db.list('users');
    const userInformation: UserInformation = {
      email,
      name,
      authLevel: (authLevel === 1) ? AuthLevel.Employee : AuthLevel.Manager
    }
    itemsRef.push(userInformation);
  }

  public async removeAccount(email: string) {

  }
}
