import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FilePaths } from '../../../../shared/constants/filePaths';
import { DeviceService } from '../../../../core/http/device/device.service';
import { Device } from '../../../../shared/models/device';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit, OnDestroy {
  private readonly ngUnsubscribe = new Subject();
  readonly filePathConstant: typeof FilePaths = FilePaths;
  deviceList: Device[] = [];
  searchString = '';

  constructor(
    private readonly deviceService: DeviceService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.deviceService
      .getDevices()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((resp: Device[]) => {
        this.deviceList = resp;
      });
  }

  onSearchChange(searchString: string): void {
    this.searchString = searchString;
  }

  // check whether is there devices matches for the search string
  isDataEmpty() {
    const list = this.deviceList.filter(
      (item: Device) =>
        item?.name
          ?.toLocaleLowerCase()
          ?.includes(this.searchString.toLocaleLowerCase()) ||
        item?.status
          ?.toLocaleLowerCase()
          ?.includes(this.searchString.toLocaleLowerCase())
    );
    return list?.length ? false : true;
  }

  goToDetails(item: Device): void {
    this.router.navigate([`${item?.id}`], {
      relativeTo: this.route,
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}
