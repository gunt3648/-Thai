import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/item/item';
import { ItemDataService } from 'src/app/services/item-data/item-data.service';
import { ItemTransferService } from 'src/app/services/item-transfer/item-transfer.service';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  public items$: Observable<Item[]>;

  constructor(
    private itemData: ItemDataService,
    private itemTransfer: ItemTransferService
  ) { }

  ngOnInit() {
    this.initItems();
  }

  initItems() {
    this.items$ = this.itemData.getAllItems();
  }

  removeItem(key: string) {
    this.itemTransfer.reset();
    this.itemData.deleteItem(key);
  }

  selectItem(key: string, name: string) {
    this.itemTransfer.setKey(key);
    this.itemTransfer.setItemName(name);
  }

}
