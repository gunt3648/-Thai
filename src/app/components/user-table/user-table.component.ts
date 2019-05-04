import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './../../services/auth/auth.service';
import { UserInformation } from './../../interfaces/user/user';
import { UserDataService } from './../../services/user-data/user-data.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  public userData$: Observable<UserInformation[]>;

  constructor(
    private userData: UserDataService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.initUserData();
  }

  initUserData() {
    this.userData$ = this.userData.getAllUser();
  }

  removeUser(email: string) {
    this.auth.removeAccount(email);
  }

  isLoggingIn(email: string): boolean {
    return email === this.auth.loggingInAccount;
  }

}
