import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { QuantityWithKey, Item } from './../../interfaces/item/item';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CheckoutTransferService {

  private itemsToCheckout = new BehaviorSubject<QuantityWithKey[]>([]);
  private itemsToShow = new BehaviorSubject<Item[]>([]);

  private itemsArr: Item[] = [];

  public currentItemsToCheckout = this.itemsToCheckout.asObservable();
  public currentItemsToShow = this.itemsToShow.asObservable();

  constructor(
    private db: AngularFireDatabase
  ) { }

  public setItemsToCheckout(items: QuantityWithKey[]) {
    this.itemsToCheckout.next(items);
  }

  public reset() {
    this.itemsArr = [];
    this.itemsToCheckout.next(null);
    this.itemsToShow.next(null);
  }

  public addItem(item: Item) {
    if (!this.itemsArr.includes(item)) {
      this.itemsArr.push(item);
      this.itemsToShow.next(this.itemsArr);
    }
  }

  public  removeItem(item: Item) {
    const index = this.itemsArr.indexOf(item);
    if (index > -1) {
      this.itemsArr.splice(index, 1);
      this.itemsToShow.next(this.itemsArr);
    }
  }
}
