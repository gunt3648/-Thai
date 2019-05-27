import { KeysService } from './../keys/keys.service';
import { LogService } from './../log/log.service';
import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './../auth/auth.service';
import { Item, QuantityBySize } from 'src/app/interfaces/item/item';
import { Action } from 'src/app/interfaces/action/action.enum';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService implements OnDestroy {

  private subscription: Subscription[] = [];

  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService,
    private logService: LogService,
    private keysService: KeysService
  ) { }

  ngOnDestroy() {
    this.subscription.forEach(subscribe => {
      subscribe.unsubscribe();
    });
  }

  public async addItemToDatabase(name: string, price: number, stock: string) {
    const itemsRef = this.db.list('items-info');
    const itemInformation: Item = {
      key: null,
      name,
      price,
      stock,
      createdBy: this.auth.loggingInAccount,
      createdDate: new Date().toLocaleString(),
      size: { s: 0, m: 0, l: 0, xl: 0, xxl: 0 }
    };
    await itemsRef.push(itemInformation);
    await this.keysService.updateLastItemKey('items-info');
  }

  public async updateItemInfo(key: string, itemInfo: Item | any) {
    const itemsRef = this.db.list('items-info');
    await itemsRef.update(key, itemInfo);
    await this.logService.record(Action.Update, this.auth.loggingInAccount, `Updated item: ${key}`);
  }

  public deleteItem(key: string) {
    this.keysService.deleteItemInfo('items-info', key);
  }

  public getAllItems(): Observable<Item[]> {
    return this.db.list<Item>('items-info',
      ref => ref.orderByChild('name')
    ).valueChanges();
  }

  public getQuantityByKey(key: string) {
    return this.db.list('items-info',
      ref => ref.orderByChild('key').equalTo(key)
    ).valueChanges().pipe(
      map(items =>
        items.map((item: any) => {
          return {
            key: item.key,
            size: item.size
          };
        })
      )
    );
  }

  public checkout(key: string, amount: QuantityBySize) {
    const itemsRef = this.db.list('items-quantity');
    this.subscription.push(

    );
  }
}
