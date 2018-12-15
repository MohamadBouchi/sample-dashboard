import { Component, OnInit } from '@angular/core';
import { UserstableService } from '../services/userstable.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.pug',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent implements OnInit {

  // search = new FormControl();
  search = '';
  users: any[];
  constructor(private _users: UserstableService) { }

  ngOnInit() {
    this._users.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  searchInTable() {
    this.users = this.users.filter(res => {
      if (res.first_name !== undefined) {
        return res.first_name.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      }
    });
  }
}
