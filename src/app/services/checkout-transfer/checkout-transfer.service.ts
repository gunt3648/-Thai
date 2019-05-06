import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Item } from './../../interfaces/item/item';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CheckoutTransferService {

  private itemsToShow = new BehaviorSubject<Item[]>([]);
  private itemsToCal = new BehaviorSubject<any[]>([]);

  private itemsArr: Item[] = [];
  private itemsToCalArr: any[] = [];

  public currentItemsToShow = this.itemsToShow.asObservable();
  public currentItemsToCal = this.itemsToCal.asObservable();

  constructor(
    private db: AngularFireDatabase
  ) { }

  public reset() {
    this.itemsArr = [];
    this.itemsToShow.next(null);
  }

  public addItem(item: Item) {
    if (!this.itemsArr.includes(item)) {
      this.itemsArr.push(item);
      this.itemsToShow.next(this.itemsArr);
    }
  }

  public removeItem(item: Item) {
    const index = this.itemsArr.indexOf(item);
    if (index > -1) {
      this.itemsArr.splice(index, 1);
      this.itemsToShow.next(this.itemsArr);
    }
  }

  public addItemToCal(name: string, size: string, price: number, amount: number) {
    const index = this.isItemsToCalIncludes(name);
    const item = {
      name,
      size,
      price,
      amount
    };
    if (index > -1) {
      this.itemsToCalArr.splice(index, 1);
      this.itemsToCalArr.push(item);
      this.itemsToCal.next(this.itemsToCalArr);
    } else {
      this.itemsToCalArr.push(item);
      this.itemsToCal.next(this.itemsToCalArr);
    }
  }

  public removeItemToCal(name: string) {
    const index = this.isItemsToCalIncludes(name);
    if (index > -1) {
      this.itemsToCalArr.splice(index, 1);
      this.itemsToCal.next(this.itemsToCalArr);
    }
  }

  private isItemsToCalIncludes(name: string): number {
    let isIncludes = -1;
    this.itemsToCalArr.forEach((item, index) => { if (item.name === name) { isIncludes = index; } });
    return isIncludes;
  }
}
