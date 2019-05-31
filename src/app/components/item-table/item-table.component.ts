import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Item } from 'src/app/interfaces/item/item';
import { ItemDataService } from 'src/app/services/item-data/item-data.service';
import { ItemTransferService } from 'src/app/services/item-transfer/item-transfer.service';
import { CheckoutTransferService } from './../../services/checkout-transfer/checkout-transfer.service';
import { StoreDataService } from '../../services/store-data/store-data.service';
import { Store } from 'src/app/interfaces/store/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit, OnDestroy {

  public items$: Observable<Item[]>;
  public store$: Observable<Store[]>;

  constructor(
    private route: Router,
    private itemData: ItemDataService,
    private itemTransfer: ItemTransferService,
    private checkoutTransfer: CheckoutTransferService,
    private storeData: StoreDataService
  ) { }

  ngOnInit() {
    this.initItems();
    this.initStore();
  }

  ngOnDestroy() {
    this.itemTransfer.reset();
    this.checkoutTransfer.reset();
  }

  initItems() {
    this.items$ = this.itemData.getAllItems();

    // this.itemData.getAllItems().subscribe(a => console.log(a));
  }

  initStore() {
    this.store$ = this.storeData.getStoreInfo().pipe(
      map(store => {
        console.log('#', store);
        return store;
      })
    );
  }

  removeItem(key: string) {
    this.itemTransfer.reset();
    this.itemData.deleteItem(key);
  }

  compItem(key: string) {
    this.items$ = this.itemData.getAllItems().pipe(
      map(items => {
        console.log(items);
        let arr = [];
        if (key === 'all') {
          return items;
        } else {
          items.map((item: Item) => {
            if (item.stock === key) arr.push(item);
          })
          return arr;
        }
      })
    )
  }

  selectItem(item: Item) {
    if (this.currentRoute === '/item-management') {
      this.itemTransfer.setKey(item.key);
      this.itemTransfer.setItemName(item.name);
    } else if (this.currentRoute === '/home') {
      this.checkoutTransfer.addItem(item);
    }
  }

  public get currentRoute() {
    return this.route.url;
  }

  public getQuantity(item: any) {
    // tslint:disable-next-line:radix
    return parseInt(item.s) + parseInt(item.m) + parseInt(item.l) + parseInt(item.xl) + parseInt(item.xxl);
  }

}
