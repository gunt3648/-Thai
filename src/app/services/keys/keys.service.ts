import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  public updateLastItemKey(dbRef: string): Observable<any> {
    const itemsRef = this.db.list(dbRef);
    return this.db.list(dbRef,
      ref => ref.limitToLast(1)
    ).snapshotChanges()
      .pipe(
        take(1),
        map(items => {
          itemsRef.update(items[0].key, {
            key: items[0].key
          });
        })
      );
  }

  public deleteItemInfo(dbRef: string, key: string) {
    const itemsRef = this.db.list(`${dbRef}/${key}`);
    itemsRef.remove();
  }
}
