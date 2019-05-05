import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemTransferService {

  private key = new BehaviorSubject('');
  private name = new BehaviorSubject('');

  public currentKey = this.key.asObservable();
  public currentName = this.name.asObservable();

  public setKey(key: string) {
    this.key.next(key);
  }

  public setItemName(name: string) {
    this.name.next(name);
  }

  public reset() {
    this.key.next(null);
    this.name.next(null);
  }
}
