import { Component, OnInit } from '@angular/core';
import { UserstableService } from '../services/userstable.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.pug',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent implements OnInit {

  search: String = '';
  users: any[];
  p: Number = 1;
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

  deleteUser(id, event) {
    event.target.offsetParent.parentNode.remove();
    this._users.deletUser(id).subscribe();
  }
}
