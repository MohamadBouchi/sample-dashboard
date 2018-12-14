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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { BadgeListsService } from './badge-lists.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { SelectMenuComponent } from './select-menu/select-menu.component';
import { UserTableComponent } from './user-table/usertable.component';
import { RegisterComponent } from './register/register.component';
import { TablesPageComponent } from './tables-page/tables-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BadgeListsComponent,
    NavBarComponent,
    ThousandSeparatorPipe,
    LineChartComponent,
    LoginComponent,
    SelectMenuComponent,
    UserTableComponent,
    RegisterComponent,
    TablesPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountoModule,
    Ng2DeviceDetectorModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    Ng2DeviceDetectorModule.forRoot()
  ],
  providers: [AuthService, BadgeListsService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
