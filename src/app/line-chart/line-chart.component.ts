import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.pug',
  styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent implements OnInit {
  public isMobile: boolean;
  public isTablet: boolean;
  public isLabtop: boolean;
  public isDesktopDevice: boolean;
  public barChartOptions: any;
  public barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType = 'line';
  public barChartLegend = true;
  public aspectRation: number;
  public barChartData: {data: Number[], label: string}[];
  constructor() {
    if ( this.isTablet || this.isLabtop) {
      this.aspectRation = 3;
    } else if (this.isMobile ) {
      this.aspectRation = 1;
    } else {
      this.aspectRation = 4;
    }
    this.barChartData = [
      {data: [16, 12, 9, 10, 2, 7, 15, 11, 12, 6, 15, 21], label : 'Series A'},
      {data: [6, 2, 13, 15, 21, 1, 5, 1, 24 , 8, 5, 2], label : 'Series B'},
      {data: [16, 21, 19, 1, 14, 3, 20, 11, 15, 8, 2, 12], label : 'Series C'}
    ];
    this.barChartOptions = {
      scaleShowVerticalLines : false,
      responsive: true,
      aspectRatio: this.aspectRation,
      legend: {position: 'bottom'}
    };
  }

  ngOnInit() {
  }

}
