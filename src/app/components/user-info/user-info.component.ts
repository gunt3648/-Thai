import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './../../services/auth/auth.service';
import { UserDataService } from './../../services/user-data/user-data.service';
import { UserInformation } from 'src/app/interfaces/user/user';
import { AuthLevel } from 'src/app/interfaces/auth-level/auth-level.enum';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public currentUser$: Observable<UserInformation>;

  constructor(
    private auth: AuthService,
    private userData: UserDataService
  ) { }

  ngOnInit() {
    this.initCurrentUser();
  }

  initCurrentUser() {
    const currentUserEmail = this.auth.loggingInAccount;
    this.currentUser$ = this.userData.getUserDataByEmail(currentUserEmail);
  }
}
