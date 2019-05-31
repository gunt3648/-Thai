import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreDataService } from '../../services/store-data/store-data.service';
import { Store } from 'src/app/interfaces/store/store';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
  styleUrls: ['./store-management.component.scss']
})
export class StoreManagementComponent implements OnInit {

  public store$: Observable<Store[]>;

  constructor(
    private storeData: StoreDataService
  ) { }

  ngOnInit() {
    this.initStore();
  }

  initStore() {
    this.store$ = this.storeData.getStoreInfo();
  }

  removeStore(key: string) {
    this.storeData.deleteItem(key);
  }

}
