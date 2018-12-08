import { Component, OnInit } from '@angular/core';
import { BadgeListsService } from '../badge-lists.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.pug',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  public filterIdArray: number[] = [1, 2, 3];
  public filterLabel: string;
  public savedFilterArray: string[];
  constructor(private _BadgListsService: BadgeListsService) { }

  ngOnInit() { }
  setFilter(id) {
    if (id === 1) {
      this.savedFilterArray = ['1', '2', '3'];
    }
    if (id === 2) {
      this.savedFilterArray = ['4', '5', '6'];
    }
    if (id === 3) {
      this.savedFilterArray = ['7', '8', '9'];
    }
    this.filterLabel = 'F' + id;
    this._BadgListsService
      .getBadgeListInArray(this.savedFilterArray)
      .subscribe(data => {
        this._BadgListsService.getFilterId(data);
      });
  }
}
