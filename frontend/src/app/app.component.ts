import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Ng2DeviceService } from 'ng2-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'mvs4';
  isMobile: boolean;
  isTablet: boolean;
  isLabtop: any;
  isDesktopDevice: boolean;

  constructor(private _auth: AuthService, private deviceService: Ng2DeviceService) {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
   }
}
