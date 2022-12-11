import { Injectable } from '@angular/core';
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";
import {ApiService} from "@shared/service";

@Injectable({
  providedIn: 'root'
})
export class SalaryService implements CrudServiceInterface{

  constructor(public apiService: ApiService) { }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return this.apiService.http.post(this.apiService.baseUrl + `salary/create`, addPayload);
  }

  delete(id: string | number): Observable<ApiResponse> {
    return this.apiService.http.delete(this.apiService.baseUrl + `salary/delete/${id}`);
  }

  detail(id: string | number): Observable<ApiResponse> {
    return this.apiService.http.get(this.apiService.baseUrl + `salary/detail/${id}`);
  }

  list(): Observable<ApiResponse> {
    return this.apiService.http.get(this.apiService.baseUrl + `salary/list`);
  }

  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return this.apiService.http.put(this.apiService.baseUrl + `salary/update`, updatePayload);
  }
}
