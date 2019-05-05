import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscription, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from './../auth/auth.service';
import { Item, QuantityBySize } from 'src/app/interfaces/item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService implements OnDestroy {

  private subscription: Subscription[] = [];

  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService
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
      createBy: this.auth.loggingInAccount,
      lastUpdate: new Date()
    };
    await itemsRef.push(itemInformation);
    await this.updateLastItemKey();
    await this.initItemQuantityTemplate();
  }

  private get lastItemKey(): Observable<any> {
    return this.db.list<Item>('items-info',
      ref => ref.limitToLast(1)
    ).snapshotChanges();
  }

  private updateLastItemKey() {
    const itemsRef = this.db.list('items-info');
    this.subscription.push(
      this.lastItemKey.pipe(
        take(1),
        map(items => {
          itemsRef.update(items[0].key, {
            key: items[0].key
          });
        })
      ).subscribe()
    );
  }

  private initItemQuantityTemplate() {
    const itemsRef = this.db.list('items-quantity');
    this.subscription.push(
      this.lastItemKey.pipe(
        take(1),
        map(items => {
          const itemQuantity: QuantityBySize = {
            itemKey: items[0].key,
            s: 0,
            m: 0,
            l: 0,
            xl: 0,
            xxl: 0
          };
          itemsRef.push(itemQuantity);
        })
      ).subscribe()
    );
  }

  public updateItemInfo(key: string, itemInfo: Item) {
    const itemsRef = this.db.list('items-info');
    itemsRef.update(key, itemInfo);
  }

  public updateItemQuantity(key: string, itemQuantity: QuantityBySize) {
    const itemsRef = this.db.list('items-quantity');
    this.subscription.push(
      this.db.list('items-quantity',
        ref => ref.orderByChild('itemKey').equalTo(key)
      ).snapshotChanges().pipe(
        take(1),
        map(items => {
          itemsRef.update(items[0].key, itemQuantity);
        })
      ).subscribe()
    );
  }

  public deleteItem(key: string) {
    this.deleteItemInfo(key);
    this.deleteItemQuantity(key);
  }

  private deleteItemInfo(key: string) {
    const itemsRef = this.db.list(`items-info/${key}`);
    itemsRef.remove();
  }

  private deleteItemQuantity(key: string) {
    const itemsRef = this.db.list('items-quantity');
    this.subscription.push(
      this.db.list('items-quantity',
        ref => ref.orderByChild('itemKey').equalTo(key)
      ).snapshotChanges().pipe(
        take(1),
        map(items => {
          itemsRef.remove(items[0].key);
        })
      ).subscribe()
    );
  }

  public getAllItems(): Observable<Item[]> {
    return this.db.list<Item>('items-info',
      ref => ref.orderByChild('name')
    ).valueChanges();
  }

  public getQuantityByKey(key: string): Observable<QuantityBySize[]> {
    return this.db.list<QuantityBySize>('items-quantity', ref =>
      ref.orderByChild('itemKey').equalTo(key)
    ).valueChanges();
  }
}
