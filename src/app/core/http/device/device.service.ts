import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../../../shared/models/device';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private readonly httpService: HttpService) {}

  getDevices(): Observable<Device[]> {
    return this.httpService.get();
  }
}
