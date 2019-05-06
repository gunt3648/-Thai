import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Item } from 'src/app/interfaces/item/item';
import { ItemDataService } from 'src/app/services/item-data/item-data.service';
import { ItemTransferService } from 'src/app/services/item-transfer/item-transfer.service';
import { CheckoutTransferService } from './../../services/checkout-transfer/checkout-transfer.service';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit, OnDestroy {

  public items$: Observable<Item[]>;

  constructor(
    private route: Router,
    private itemData: ItemDataService,
    private itemTransfer: ItemTransferService,
    private checkoutTransfer: CheckoutTransferService
  ) { }

  ngOnInit() {
    this.initItems();
  }

  ngOnDestroy() {
    this.itemTransfer.reset();
    this.checkoutTransfer.reset();
  }

  initItems() {
    this.items$ = this.itemData.getAllItems();
    // this.itemData.getAllItems().subscribe(a => console.log(a));
  }

  removeItem(key: string) {
    this.itemTransfer.reset();
    this.itemData.deleteItem(key);
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

}
