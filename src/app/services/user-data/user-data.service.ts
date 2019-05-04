import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserInformation } from 'src/app/interfaces/user/user';
import { AuthLevel } from 'src/app/interfaces/auth-level/auth-level.enum';

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

  public getUserAuthLevelByEmail(email: string): Observable<AuthLevel> {
    console.log('Getting auth level of', email);
    return this.getUserDataByEmail(email).pipe(
      map(result => {
        return result[0].authLevel;
      })
    );
  }

  public getAllUser(): Observable<UserInformation[]> {
    return this.db.list<UserInformation>('users',
      ref => ref.orderByChild('authLevel')
    ).valueChanges();
  }
}
