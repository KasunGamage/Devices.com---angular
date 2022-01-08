import { Component, OnInit } from '@angular/core';
import { FilePaths } from 'src/app/shared/constants/filePaths';
import { DeviceService } from '../../../../core/http/device/device.service';
import { Device } from '../../../../shared/models/device';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  readonly filePathConstant: typeof FilePaths = FilePaths;
  deviceList: Device[] = [];
  constructor(private readonly deviceService: DeviceService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.deviceService.getDevices().subscribe((resp: Device[]) => {
      console.log(resp);
      this.deviceList = resp;
    });
  }
}
