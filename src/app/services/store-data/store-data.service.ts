import { KeysService } from '../keys/keys.service';
import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';

import { Store } from 'src/app/interfaces/store/store';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService implements OnDestroy{

  private subscription: Subscription[] = [];

  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService,
    private keysService: KeysService
  ) { }

  ngOnDestroy() {
    this.subscription.forEach(subscribe => subscribe.unsubscribe());
  }

  public getStoreInfo(): Observable<Store[]> {
    return this.db.list<Store>('store').valueChanges();
  }

  public async addStore(name: string, location: string, contact: string) {
    const itemsRef = this.db.list('store');
    const itemInformation: Store = {
      key: null,
      name,
      location,
      contact,
      createdBy: this.auth.loggingInAccount,
      createdDate: new Date().toLocaleString()
    };
    await itemsRef.push(itemInformation);
    const obs$ = this.keysService.updateLastItemKey('store');
    await this.subscription.push(obs$.subscribe());
  }

  public deleteItem(key: string) {
    this.keysService.deleteItemInfo('store', key);
  }
}
