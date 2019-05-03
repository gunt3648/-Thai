import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

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
