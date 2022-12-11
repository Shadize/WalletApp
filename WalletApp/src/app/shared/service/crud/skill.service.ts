import {Injectable} from '@angular/core';
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";
import {ApiService} from "@shared/service";

@Injectable()
export class SkillService implements CrudServiceInterface{

  constructor(private api: ApiService) {
  }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.post(this.api.baseUrl + "skill/create" , addPayload);
  }

  delete(id: string | number): Observable<ApiResponse> {
    return this.api.http.delete(this.api.baseUrl + `skill/delete/${id}`);
  }

  list(): Observable<ApiResponse> {
    return this.api.http.get(this.api.baseUrl + "skill/list");
  }

  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.put(this.api.baseUrl + "skill/update/", updatePayload);
  }

  detail(id: string | number): Observable<ApiResponse> {
    return this.api.http.get(this.api.baseUrl + `skill/detail/${id}`);
  }
}
