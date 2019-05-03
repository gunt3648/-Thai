import { Component, OnInit } from '@angular/core';
import { AuthLevel } from 'src/app/interfaces/auth-level/auth-level.enum';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public mock: any = {
    name: 'John Doe',
    email: 'john.doe@mail.com',
    status: (AuthLevel.Employee === AuthLevel.Employee) ? 'Employee' : 'Manager'
  };

  constructor() { }

  ngOnInit() {
  }

}
