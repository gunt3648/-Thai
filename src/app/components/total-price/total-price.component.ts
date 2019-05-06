import { Size } from 'src/app/interfaces/item/item';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { CheckoutTransferService } from './../../services/checkout-transfer/checkout-transfer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss']
})
export class TotalPriceComponent implements OnInit {

  public items$: Observable<any[]>;
  public totalPrice: number;

  constructor(
    private checkoutTransfer: CheckoutTransferService
  ) { }

  ngOnInit() {
    this.initItems();
  }

  initItems() {
    this.items$ = this.checkoutTransfer.currentItemsToCal.pipe(
      map(items => {
        this.totalPrice = 0;
        return items.map(item => {
          if (item.size === Size.s + '') {
            item.size = 'S';
          } else if (item.size === Size.m + '') {
            item.size = 'M';
          } else if (item.size === Size.l + '') {
            item.size = 'L';
          } else if (item.size === Size.xl + '') {
            item.size = 'XL';
          } else if (item.size === Size.xxl + '') {
            item.size = 'XXL';
          }

          this.totalPrice += item.amount * item.price;
          return item;
        });
      })
    );
}

}
