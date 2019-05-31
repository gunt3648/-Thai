import { Size } from 'src/app/interfaces/item/item';
import { LogService } from './../../services/log/log.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-viewlog',
  templateUrl: './viewlog.component.html',
  styleUrls: ['./viewlog.component.scss']
})
export class ViewLogComponent implements OnInit {

  public log$: Observable<any>;
  private todayTotal = 0;

  constructor(
    private logService: LogService
  ) { }

  ngOnInit() {
    this.initLog();
  }

  initLog() {
    this.log$ = this.logService.getTodayTransaction().pipe(
      map(result => {
        result.forEach(res => {
          // tslint:disable-next-line: radix
          if (res.price) { this.todayTotal += parseInt(res.price); }
        });
        return result;
      })
    );
  }

  getSize(s: string) {
    // tslint:disable-next-line: radix
    const size = parseInt(s);
    if (size === Size.s) { return 'S'; }
    else if (size === Size.m) { return 'M'; }
    else if (size === Size.l) { return 'L'; }
    else if (size === Size.xl) { return 'XL'; }
    else if (size === Size.xxl) { return 'XXL'; }
  }

  getTotal() {
    return this.todayTotal;
  }

}
