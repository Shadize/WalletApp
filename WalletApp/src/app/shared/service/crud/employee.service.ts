import {Injectable} from '@angular/core';
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";
import {ApiService, HttpService} from "@shared/service";

@Injectable()
export class EmployeeService implements CrudServiceInterface{

  constructor(private api:ApiService) {
  }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.post(this.api.baseUrl + "employee/create" , addPayload);
  }

  delete(id: string | number): Observable<ApiResponse> {
    return this.api.http.delete(this.api.baseUrl + `employee/delete/${id}`);
  }

  list(): Observable<ApiResponse> {
    return this.api.http.get(this.api.baseUrl + "employee/list");
  }

  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.put(this.api.baseUrl + "employee/update/", updatePayload);
  }

  detail(id: string | number): Observable<ApiResponse> {
    return this.api.http.get(this.api.baseUrl + `employee/detail/${id}`);
  }
}
