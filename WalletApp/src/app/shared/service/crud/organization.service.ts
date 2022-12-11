import { Injectable } from '@angular/core';
import {ApiResponse, ApiUriEnum, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";
import {ApiService} from "@shared/service";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService implements CrudServiceInterface{

  constructor(public apiService: ApiService) { }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return this.apiService.http.post(this.apiService.baseUrl + `organization/create`, addPayload);
  }

  delete(id: string | number): Observable<ApiResponse> {
    return this.apiService.http.delete(this.apiService.baseUrl + `organization/delete/${id}`);
  }

  list(): Observable<ApiResponse> {
    return this.apiService.http.get(this.apiService.baseUrl + `organization/list`);
  }

  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return this.apiService.http.put(this.apiService.baseUrl + `organization/update`, updatePayload);
  }

  detail(id: string | number): Observable<ApiResponse> {
    return this.apiService.http.get(this.apiService.baseUrl + `organization/detail/${id}`);
  }
}
