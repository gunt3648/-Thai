import { KeysService } from './../keys/keys.service';
import { LogService } from './../log/log.service';
import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscription, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

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
    // console.log('adding item to db..', itemInformation);
    await itemsRef.push(itemInformation);
    const obs$ = this.keysService.updateLastItemKey('items-info');
    await this.subscription.push(obs$.subscribe());
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

  public getNameByKey(key: string) {
    return this.db.list('items-info',
      ref => ref.orderByChild('key').equalTo(key)
    ).valueChanges().pipe(
      take(1),
      map(result => result.map((res: any) => res.name))
    );
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

  public recordTransaction(key: string, name: string, size: string, amount: string, price: string, store: string) {
    this.logService.recordTransaction(key, name, size, amount, price, store);
  }
}
