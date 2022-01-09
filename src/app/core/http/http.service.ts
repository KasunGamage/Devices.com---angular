import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Constants } from '../../shared/constants/constants';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Generic API GET
   * @param path API Endpoint
   * @returns http response
   */
  get(): Observable<any> {
    return this.http.get(`${Constants.API_LINK}`);
  }
}
