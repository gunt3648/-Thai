import { LogService } from './../../services/log/log.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewlog',
  templateUrl: './viewlog.component.html',
  styleUrls: ['./viewlog.component.scss']
})
export class ViewLogComponent implements OnInit {

  public log$: Observable<any>;

  constructor(
    private logService: LogService
  ) { }

  ngOnInit() {
    this.initLog();
  }

  initLog() {
    this.log$ = this.logService.getTodayTransaction();
  }

}
