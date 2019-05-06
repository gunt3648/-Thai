import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Item, Size } from 'src/app/interfaces/item/item';
import { CheckoutTransferService } from './../../services/checkout-transfer/checkout-transfer.service';
import { ItemDataService } from 'src/app/services/item-data/item-data.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  public showItems$: Observable<Item[]>;
  private subscription: Subscription[] = [];

  private keys: string[] = [];
  private checkoutList: Map<string, { size: number, amount: number }> = new Map();

  constructor(
    private itemData: ItemDataService,
    private checkoutTransfer: CheckoutTransferService
  ) { }

  ngOnInit() {
    this.initShowItems();
  }

  ngOnDestroy() {
    this.checkoutTransfer.reset();
    this.subscription.forEach(subscribe => subscribe.unsubscribe());
  }

  initShowItems() {
    this.showItems$ = this.checkoutTransfer.currentItemsToShow;
  }

  remove(item: Item) {
    this.checkoutTransfer.removeItem(item);
    this.checkoutTransfer.removeItemToCal(item.name);
  }

  checkout() {
    this.keys.forEach(key => {
      this.subscription.push(
        this.itemData.getQuantityByKey(key).pipe(
          take(1),
          map(i => {
            const items = this.checkoutList.get(key);
            const itemToUpdate = {
              s: i[0].size.s,
              m: i[0].size.m,
              l: i[0].size.l,
              xl: i[0].size.xl,
              xxl: i[0].size.xxl
            };
            if (items.size === Size.s && i[0].size.s >= items.amount) {
              itemToUpdate.s -= items.amount;
            } else if (items.size === Size.m && i[0].size.m >= items.amount) {
              itemToUpdate.m -= items.amount;
            } else if (items.size === Size.l && i[0].size.l >= items.amount) {
              itemToUpdate.l -= items.amount;
            } else if (items.size === Size.xl && i[0].size.xl >= items.amount) {
              itemToUpdate.xl -= items.amount;
            } else if (items.size === Size.xxl && i[0].size.xxl >= items.amount) {
              itemToUpdate.xxl -= items.amount;
            } else {
              console.log('Check out failed on: ', key);
            }

            this.itemData.updateItemInfo(key, {size: itemToUpdate});
          })
        ).subscribe()
      );
    });
  }

  addToCheckoutList(key: string, name: string, price: string, size: string, amount: string) {
    if (!this.keys.includes(key)) { this.keys.push(key); }

    // tslint:disable-next-line:radix
    this.checkoutList.set(key, { size: parseInt(size), amount: parseInt(amount) });

    // tslint:disable-next-line:radix
    this.checkoutTransfer.addItemToCal(name, size, parseInt(price), parseInt(amount));
  }
}
