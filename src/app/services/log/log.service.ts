import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Log } from './../../interfaces/log/log';
import { Action } from './../../interfaces/action/action.enum';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  public record(act: Action, actor: string, msg?: string) {
    const itemsRef = this.db.list('logs');
    itemsRef.push({
      act,
      actor,
      time: new Date().toLocaleString(),
      msg: (msg) ? msg : null
    });
  }

  public recordTransaction(key: string, name: string, size: string, amount: string, price: string, store: string) {
    const day = new Date();
    const itemsRef = this.db.list(`transactions/${day.getFullYear()}/${day.getMonth() + 1}/${day.getDate()}`);
    // console.log({ key, size, amount, price });
    return itemsRef.push({ key, name, size, amount, price, store });
  }

  public getAllLog(): Observable<any[]> {
    return this.db.list<Log>('logs').valueChanges().pipe(
      map((result: Log[]) =>
        result.map((res: Log) => {
          return {
            act: this.convertEnum(res.act),
            actor: res.actor,
            time: res.time,
            msg: (res.msg) ? res.msg : null
          };
        })
      )
    );
  }

  public getTodayTransaction(): Observable<any[]> {
    const day = new Date();
    return this.db.list(`transactions/${day.getFullYear()}/${day.getMonth() + 1}/${day.getDate()}`)
      .valueChanges();
  }

  private convertEnum(val: any): string {
    if (val === Action.Create) {
      return 'Create';
    } else if (val === Action.Delete) {
      return 'Delete';
    } else if (val === Action.Update) {
      return 'Update';
    } else if (val === Action.Login) {
      return 'Login';
    } else if (val === Action.Logout) {
      return 'Logout';
    }
  }
}
