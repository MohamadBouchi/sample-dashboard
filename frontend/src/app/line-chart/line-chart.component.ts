import { Component, OnInit } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';
import { BadgeListsService } from '../../../services/badge-lists.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.pug',
  styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent implements OnInit {
  private isMobile: boolean;
  private isTablet: boolean;
  private isLabtop: boolean;
  private barChartOptions: any;
  private barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  private barChartType = 'line';
  private barChartLegend = true;
  private aspectRation: number;
  private barChartData: {data: Number[], label: string}[];
  private innerWidth: number;
  private Series1 = [16, 12, 9, 10, 2, 7, 15, 11, 12, 6, 15, 21];
  private Series2 = [6, 2, 13, 15, 21, 1, 5, 1, 24 , 8, 5, 2];
  private Series3 = [16, 21, 19, 1, 14, 3, 20, 11, 15, 8, 2, 12];

  constructor(private deviceService: Ng2DeviceService, private _BadgListsService: BadgeListsService) {
    this._BadgListsService.barChartArray.subscribe(data => {
      this.Series1 = data.series1;
      this.Series2 = data.series2;
      this.Series3 = data.series3;
      this.barChartData = [
        {data: this.Series1, label : 'Series A'},
        {data: this.Series2, label : 'Series B'},
        {data: this.Series3, label : 'Series C'}
      ];
    });
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1565 && this.innerWidth > 500) {
      this.isLabtop = true;
    } else {
      this.isLabtop = false;
    }
    if ( this.isTablet || this.isLabtop) {
      this.aspectRation = 5;
    } else if (this.isMobile ) {
      this.aspectRation = 1; // 1
    } else {
      this.aspectRation = 5; // 4
    }
    this.barChartData = [
      {data: this.Series1, label : 'Series A'},
      {data: this.Series2, label : 'Series B'},
      {data: this.Series3, label : 'Series C'}
    ];
    this.barChartOptions = {
      scaleShowVerticalLines : false,
      responsive: true,
      aspectRatio: this.aspectRation,
      legend: {position: 'bottom'}
    };
  }
  ngOnInit() { }
}
