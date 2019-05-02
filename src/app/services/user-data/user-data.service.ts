import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserInformation } from 'src/app/interfaces/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  public getUserDataByEmail(email: string): Observable<UserInformation[]> {
    return this.db.list<UserInformation>('users',
      ref => ref.orderByChild('email').equalTo(email)
    )
      .valueChanges();
  }
}
