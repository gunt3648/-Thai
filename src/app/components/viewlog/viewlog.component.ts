import { LogService } from './../../services/log/log.service';
import { Log } from './../../interfaces/log/log';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewlog',
  templateUrl: './viewlog.component.html',
  styleUrls: ['./viewlog.component.scss']
})
export class ViewLogComponent implements OnInit {

  public log$: Observable<Log[]>;

  constructor(
    private logService: LogService
  ) { }

  ngOnInit() {
    this.initLog();
  }

  initLog() {
    this.log$ = this.logService.getAllLog();
  }

}
