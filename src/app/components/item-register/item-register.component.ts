import { Component, OnInit } from '@angular/core';

import { ItemDataService } from './../../services/item-data/item-data.service';

@Component({
  selector: 'app-item-register',
  templateUrl: './item-register.component.html',
  styleUrls: ['./item-register.component.scss']
})
export class ItemRegisterComponent implements OnInit {

  constructor(
    private itemData: ItemDataService
  ) { }

  ngOnInit() {
  }

  addItem(name: string, price: number, stock: string) {
    this.itemData.addItemToDatabase(name, price, stock);
  }

}
