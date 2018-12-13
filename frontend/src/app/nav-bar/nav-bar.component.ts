import { Component, OnInit } from '@angular/core';
import { BadgeListsService } from '../badge-lists.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Ng2DeviceService } from 'ng2-device-detector';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.pug',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  public filterIdArray: number[] = [1, 2, 3];
  public filterLabel: string;
  public savedFilterArray: string[];
  isMobile: boolean;
  isTablet: boolean;
  isDesktopDevice: boolean;
  constructor(private _BadgListsService: BadgeListsService, private router: Router, private _auth: AuthService
             , private deviceService: Ng2DeviceService) {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
  }

  ngOnInit() { this.setFilter(1); }
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
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      });
  }
}
