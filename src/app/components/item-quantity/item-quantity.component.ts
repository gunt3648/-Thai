import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';

import { ItemTransferService } from 'src/app/services/item-transfer/item-transfer.service';
import { QuantityBySize, Item } from 'src/app/interfaces/item/item';
import { ItemDataService } from 'src/app/services/item-data/item-data.service';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.scss']
})
export class ItemQuantityComponent implements OnInit, OnDestroy {

  private subscription: Subscription[] = [];

  public name$: Observable<string>;
  public quantity$: Observable<any[]>;

  private key: string;

  constructor(
    private db: AngularFireDatabase,
    private itemData: ItemDataService,
    private itemTransfer: ItemTransferService
  ) { }

  ngOnInit() {
    this.initName();
    this.initQuantity();
  }

  ngOnDestroy() {
    this.subscription.forEach(subscribe => {
      subscribe.unsubscribe();
    });
  }

  initName() {
    this.name$ = this.itemTransfer.currentName;
  }

  initQuantity() {
    this.subscription.push(
      this.itemTransfer.currentKey.subscribe(key => {
        this.key = key;
        this.quantity$ = this.itemData.getQuantityByKey(key);
      })
    );
  }

  updateQuantity(key: string, quantity: QuantityBySize) {
    const q = {
      s: (quantity.s > 0) ? quantity.s : 0,
      m: (quantity.m > 0) ? quantity.m : 0,
      l: (quantity.l > 0) ? quantity.l : 0,
      xl: (quantity.xl > 0) ? quantity.xl : 0,
      xxl: (quantity.xxl > 0) ? quantity.xxl : 0
    };
    // console.log(q);
    this.itemData.updateItemInfo(key, {size: q});
  }

}
