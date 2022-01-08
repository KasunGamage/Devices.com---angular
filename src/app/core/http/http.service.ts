import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Constants } from '../../shared/constants/constants';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly contentType = 'Content-Type';
  private readonly contentTypeJson = 'application/json';

  constructor(private readonly http: HttpClient) {}

  /**
   * Generic API GET
   * @param path API Endpoint
   * @returns http response
   */
  get(path: string): Observable<any> {
    return this.http.get(`${Constants.API_LINK}${path}`, {
      headers: this.getHeaders(),
    });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders().set(this.contentType, this.contentTypeJson);
  }
}
