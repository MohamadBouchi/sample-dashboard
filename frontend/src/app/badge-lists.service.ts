import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeListsService {

  public filterId = new Subject<any>();
  public barChartArray = new Subject<any>();
  constructor(private http: HttpClient) { }

  // all badge_lists
  getBadgeLists() {
    return this.http.get<{ id: number; badge_value1: number; badge_value2: number; badge_value3: number; }[]>
    ('http://localhost:4001/badge_lists/')
    .pipe(map(data => data.map(el => ({badge_value1: el.badge_value1, badge_value2: el.badge_value2, badge_value3: el.badge_value3}))));
  }

  // badge_list = id
  getBadgeListMember(id) {
    return this.http.get<{ badge_value1: number; badge_value2: number; badge_value3: number; }[]>
    ('http://localhost:4001/badge_list/', {
      params: {
        id: id
      }
    }).pipe(map(data => data.pop()));
  }

  // badge_list in array
  getBadgeListInArray(id: string[]) {
    return this.http.get<{ badge_value1: number; badge_value2: number; badge_value3: number; }[]>
    ('http://localhost:4001/badge_list/', {
      params: {
        id: id
      }
    }).pipe(map(data => data.map(el => ({badge_value1: el.badge_value1, badge_value2: el.badge_value2, badge_value3: el.badge_value3}))));
  }

  getFilterId(id) {
    this.filterId.next(id);
  }

  setBarChartArray(data) {
    this.barChartArray.next(data);
  }
}




  // getBadgeListArray(id) {
  //   return this.http.get<{ id: number; badge_value1: number; badge_value2: number; badge_value3: number; }[]>
  //   ('http://localhost:4001/badge_list/', {
  //     params: {
  //       id: id
  //     }
  //   })
  //   .pipe(map(data => data.map(el => ({badge_value1: el.badge_value1, badge_value2: el.badge_value2, badge_value3: el.badge_value3}))));
  // }
