import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../shared/models/api-response';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private readonly httpService: HttpService) {}

  getDevices(): Observable<ApiResponse> {
    return this.httpService.get();
  }
}
