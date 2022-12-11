import {Injectable} from '@angular/core';
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";
import {ApiService} from "@shared/service";

@Injectable()
export class FleetService implements CrudServiceInterface{

  constructor(private api: ApiService) {
  }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.post(this.api.baseUrl + "fleet/create" , addPayload);
  }

  delete(id: string | number): Observable<ApiResponse> {
    return this.api.http.delete(this.api.baseUrl + `fleet/delete/${id}`);
  }

  list(): Observable<ApiResponse> {
    return this.api.http.get(this.api.baseUrl + "fleet/list");
  }

  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.put(this.api.baseUrl + "fleet/update/", updatePayload);
  }

  detail(id: string | number): Observable<ApiResponse> {
    return this.api.http.get(this.api.baseUrl + `fleet/detail/${id}`);
  }
}
