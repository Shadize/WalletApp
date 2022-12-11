import { Injectable } from '@angular/core';
import {ApiService} from "@shared/service";
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentService implements CrudServiceInterface {

  constructor(public apiService: ApiService) { }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return this.apiService.http.post(this.apiService.baseUrl + `document/create`, addPayload);
  }

  delete(id: string | number): Observable<ApiResponse> {
    return this.apiService.http.delete(this.apiService.baseUrl + `document/delete/${id}`);
  }

  detail(id: string | number): Observable<ApiResponse> {
    return this.apiService.http.get(this.apiService.baseUrl + `document/detail/${id}`);
  }

  list(): Observable<ApiResponse> {
    return this.apiService.http.get(this.apiService.baseUrl + `document/list`);
  }

  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return this.apiService.http.put(this.apiService.baseUrl + `document/update`, updatePayload);
  }
}
