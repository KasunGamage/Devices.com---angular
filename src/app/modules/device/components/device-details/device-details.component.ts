import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DeviceService } from 'src/app/core/http/device/device.service';
import { FilePaths } from 'src/app/shared/constants/filePaths';
import { Device } from 'src/app/shared/models/device';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss'],
})
export class DeviceDetailsComponent implements OnInit {
  readonly filePathConstant: typeof FilePaths = FilePaths;
  private readonly ngUnsubscribe = new Subject();
  relatedDeviceList: Device[] = [];
  deviceDetails: Device | null = null;
  deviceId: number | null = null;
  constructor(
    private readonly deviceService: DeviceService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.deviceId = Number(this.route.snapshot.paramMap.get('id'));
    this.getDevices();
  }

  getDevices(): void {
    this.deviceService
      .getDevices()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((resp: Device[]) => {
        this.deviceDetails = resp.filter(
          (item: Device) => item?.id === this.deviceId
        )[0];
        this.relatedDeviceList = resp.filter((f) =>
          this.deviceDetails?.related.includes(f.id)
        );
      });
  }
}
