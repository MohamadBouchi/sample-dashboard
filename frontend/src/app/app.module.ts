import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BadgeListsComponent } from './badge-lists/badge-lists.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CountoModule } from 'angular2-counto';
import { ThousandSeparatorPipe } from './thousand-separator.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BadgeListsComponent,
    NavBarComponent,
    ThousandSeparatorPipe,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    CountoModule,
    Ng2DeviceDetectorModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    Ng2DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
