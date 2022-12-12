import { Injectable } from '@angular/core';
import {ApiResponse, ApiUriEnum, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";
import {ApiService} from "@shared/service";
import {Organization} from "@shared/model/dto/organization.interface";
import {Contract} from "@shared/model/dto/contract.interface";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends ApiService implements CrudServiceInterface{


  list(): Observable<Organization[]> {
    return this.get(`/organization/list`)
      .pipe(map((response: ApiResponse) => {
        return (response.result) ? response.data as Organization[] : [];
    }));
  }


  detail = (id: string | number) : Observable<Organization> => {
    return this.get(`contract/delete/${id}`)
      .pipe(map((response: ApiResponse) => {
        return (response.result) ? response.data as Organization : {} as Organization;
    }));
  }

  create(addPayload: PayloadInterface): Observable<Organization> {
    return this.post(`contract/create`, addPayload)
      .pipe(map((response: ApiResponse) => {
        return (response.data as Organization);
    }));
  }

  update(updatePayload: PayloadInterface): Observable<Organization> {
    return this.put(`/contract/update`, updatePayload)
      .pipe(map((response: ApiResponse) => {
        return (response.data as Organization);
    }));
  }


  del(id: string | number): Observable<ApiResponse> {
    return this.delete(`contract/delete/${id}`);
  }
}
