import {Injectable} from '@angular/core';
import {HttpService} from '@shared/service/http.service';
import {Observable} from "rxjs";
import {ApiResponse, PayloadInterface} from "@shared/model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:2022/api/';

  constructor(public http: HttpService) {
  }

  get(partUrl: string): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${partUrl}`).pipe(map((response: any) => response as ApiResponse));
  }

  post(partUrl: string, payload: PayloadInterface): Observable<ApiResponse> {
    console.log('url ', `${this.baseUrl}${partUrl}`);
    return this.http.post(`${this.baseUrl}${partUrl}`, payload).pipe(map((response: any) => response as ApiResponse));
  }

  put(partUrl: string, payload: PayloadInterface): Observable<ApiResponse> {
    return this.http.put(`${this.baseUrl}${partUrl}`, payload).pipe(map((response: any) => response as ApiResponse));
  }

  delete(partUrl: string): Observable<ApiResponse> {
    return this.http.delete(`${this.baseUrl}${partUrl}`).pipe(map((response: any) => response as ApiResponse));
  }
}
