import { Component, OnInit, ElementRef } from '@angular/core';
import { BadgeListsService } from '../../../services/badge-lists.service';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.component.pug',
  styleUrls: ['./select-menu.component.sass']
})
export class SelectMenuComponent implements OnInit {


  constructor(private ref: ElementRef, private _BadgListsService: BadgeListsService) { }

  ngOnInit() {
  }

  reset() {
    const selectArray = this.ref.nativeElement.getElementsByClassName('custom-select');
    for (const select of selectArray) {
      select.value = -1;
    }
    this.onSelect();
  }
  onSelect() {
    const arr = [];
    while (arr.length < 3) {
      const r = Math.floor(Math.random() * 100) + 1;
      if (arr.indexOf(r) === -1) { arr.push(r); }
    }
    const arr2 = [];
    while (arr2.length < 8) {
      const r = Math.floor(Math.random() * 40) + 1;
      if (arr2.indexOf(r) === -1) { arr2.push(r); }
    }
    const arr3 = [];
    while (arr3.length < 8) {
      const r = Math.floor(Math.random() * 40) + 1;
      if (arr3.indexOf(r) === -1) { arr3.push(r); }
    }
    const arr4 = [];
    while (arr4.length < 8) {
      const r = Math.floor(Math.random() * 40) + 1;
      if (arr4.indexOf(r) === -1) { arr4.push(r); }
    }
    const barChartData = {
      'series1': arr2,
      'series2': arr3,
      'series3': arr4,
    };
    this._BadgListsService
      .getBadgeListInArray(arr)
      .subscribe(data => {
        this._BadgListsService.getFilterId(data);
      });
      this._BadgListsService.setBarChartArray(barChartData);
  }
}
