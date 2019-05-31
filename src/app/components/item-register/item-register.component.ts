import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemDataService } from './../../services/item-data/item-data.service';
import { StoreDataService } from '../../services/store-data/store-data.service';
import { Store } from 'src/app/interfaces/store/store';

@Component({
  selector: 'app-item-register',
  templateUrl: './item-register.component.html',
  styleUrls: ['./item-register.component.scss']
})
export class ItemRegisterComponent implements OnInit {

  public store$: Observable<Store[]>;
  public selectedOption: any;

  constructor(
    private storeData: StoreDataService,
    private itemData: ItemDataService
  ) { }

  ngOnInit() {
    this.initStore();
  }

  initStore() {
    this.store$ = this.storeData.getStoreInfo();
  }

  addItem(name: string, price: number, store: string) {
    this.itemData.addItemToDatabase(name, price, store);
  }

}
