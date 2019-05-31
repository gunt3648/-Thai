import { Component, OnInit } from '@angular/core';

import { StoreDataService } from './../../services/store-data/store-data.service';

@Component({
  selector: 'app-store-register',
  templateUrl: './store-register.component.html',
  styleUrls: ['./store-register.component.scss']
})
export class StoreRegisterComponent implements OnInit {

  constructor(
    private storeData: StoreDataService
  ) { }

  ngOnInit() {
  }

  addStore(name: string, location: string, contact: string) {
    this.storeData.addStore(name, location, contact);
  }

}
