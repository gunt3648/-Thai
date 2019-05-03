import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  public mock: any = [
    {
      item: 'Shirt',
      prize: '10'
    },
    {
      item: 'Pants',
      prize: '15'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
