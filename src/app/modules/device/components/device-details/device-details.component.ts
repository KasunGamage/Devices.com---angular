import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DeviceService } from '../../../../core/http/device/device.service';
import { FilePaths } from '../../../../shared/constants/filePaths';
import { Device } from '../../../../shared/models/device';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss'],
})
export class DeviceDetailsComponent implements OnInit, OnDestroy {
  private readonly ngUnsubscribe = new Subject();
  private deviceId: number | null = null;

  readonly filePathConstant: typeof FilePaths = FilePaths;
  relatedDeviceList: Device[] = [];
  deviceDetails: Device | null = null;

  constructor(
    private readonly deviceService: DeviceService,
    private readonly route: ActivatedRoute
  ) {
    //
  }

  ngOnInit(): void {
    // get the device id
    this.deviceId = Number(this.route.snapshot.paramMap.get('id'));
    this.getDevices();
  }

  // use the same endpoint used to get the all device details - since i'm using a JSON
  getDevices(): void {
    this.deviceService
      .getDevices()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((resp: Device[]) => {
        // get the device details that equal to id
        this.deviceDetails = resp.filter(
          (item: Device) => item?.id === this.deviceId
        )[0];
        // get the related device details by passing the related device array
        this.relatedDeviceList = resp.filter((f) =>
          this.deviceDetails?.related.includes(f.id)
        );
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}
