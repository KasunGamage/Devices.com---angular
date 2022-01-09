import { Constants } from './../../../../shared/constants/constants';
import { Device } from './../../../../shared/models/device';
import { SearchBarComponent } from './../search-bar/search-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { DeviceService } from '../../../../core/http/device/device.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DeviceListComponent } from './device-list.component';
import { SearchFilterPipe } from '../../../../shared/pipes/filter.pipe';
import { By } from '@angular/platform-browser';

describe('DeviceListComponent', () => {
  let component: DeviceListComponent;
  let fixture: ComponentFixture<DeviceListComponent>;
  let service: DeviceService;
  let httpMock: HttpTestingController;
  const dummyDeviceList: Device[] = [
    {
      id: 1,
      name: 'Device 1',
      status: 'Available',
      icon: {
        id: 1,
        url: 'assets/images/cell-phone.svg',
      },
      type: 1,
      temperature: '10 Celsius',
      usage: 1,
      related: [2, 3],
    },
    {
      id: 2,
      name: 'Device 2',
      status: 'Offline',
      icon: {
        id: 2,
        url: 'assets/images/device-tab.svg',
      },
      type: 1,
      temperature: '15 Celsius',
      usage: 1,
      related: [1, 3],
    },
    {
      id: 3,
      name: 'Device 3',
      status: 'Available',
      icon: {
        id: 3,
        url: 'assets/images/pc-monitor.svg',
      },
      type: 1,
      temperature: '30 Celsius',
      usage: 1,
      related: [1, 2],
    },
    {
      id: 4,
      name: 'Device 4',
      status: 'Offline',
      icon: {
        id: 2,
        url: 'assets/images/device-tab.svg',
      },
      type: 2,
      temperature: '25 Celsius',
      usage: 1,
      related: [2, 3, 7, 8],
    },
    {
      id: 5,
      name: 'Device 5',
      status: 'Offline',
      icon: {
        id: 2,
        url: 'assets/images/device-tab.svg',
      },
      type: 1,
      temperature: '15 Celsius',
      usage: 1,
      related: [1, 3, 5],
    },
    {
      id: 6,
      name: 'Device 6',
      status: 'Offline',
      icon: {
        id: 3,
        url: 'assets/images/pc-monitor.svg',
      },
      type: 1,
      temperature: '40 Celsius',
      usage: 1,
      related: [2],
    },
    {
      id: 7,
      name: 'Device 7',
      status: 'Available',
      icon: {
        id: 1,
        url: 'assets/images/cell-phone.svg',
      },
      type: 1,
      temperature: '10 Celsius',
      usage: 1,
      related: [2, 3, 7, 8, 9],
    },
    {
      id: 8,
      name: 'Device 8',
      status: 'Offline',
      icon: {
        id: 1,
        url: 'assets/images/cell-phone.svg',
      },
      type: 1,
      temperature: '45 Celsius',
      usage: 1,
      related: [],
    },
    {
      id: 9,
      name: 'Device 9',
      status: 'Offline',
      icon: {
        id: 1,
        url: 'assets/images/cell-phone.svg',
      },
      type: 1,
      temperature: '12 Celsius',
      usage: 1,
      related: [4, 7],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceListComponent, SearchBarComponent, SearchFilterPipe],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DeviceService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DeviceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getDevices function', () => {
    expect(service.getDevices).toBeTruthy();
  });

  it('should return an Observable<Devices[]>', () => {
    service.getDevices().subscribe((device: Device[]) => {
      expect(device.length).toBe(9);
      expect(device).toEqual(dummyDeviceList);
    });

    const req = httpMock.expectOne({ method: 'GET', url: Constants.API_LINK });
    expect(req.request.responseType).toBe('json');
    req.flush(dummyDeviceList);
  });
});
