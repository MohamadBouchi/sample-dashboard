import { Component, OnInit } from '@angular/core';
import { UserstableService } from '../services/userstable.service';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.pug',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent implements OnInit {

  users: any[];
  constructor(private _users: UserstableService) { }

  ngOnInit() {
    this._users.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
