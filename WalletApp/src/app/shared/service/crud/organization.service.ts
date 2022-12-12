import { Injectable } from '@angular/core';
import {ApiResponse, ApiUriEnum, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";
import {ApiService} from "@shared/service";
import {Organization} from "@shared/model/dto/organization.interface";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends ApiService implements CrudServiceInterface{


  list(): Observable<Organization[]> {
    return this.get(`organization/list`)
      .pipe(map((response: ApiResponse) => {
        return (response.result) ? response.data as Organization[] : [];
    }));
  }


  detail(id: string | number) : Observable<Organization>{
    return this.get(`organization/detail/${id}`)
      .pipe(map((response: ApiResponse) => {
        return (response.result) ? response.data as Organization : {} as Organization;
    }));
  }

  create(addPayload: PayloadInterface): Observable<boolean> {
    return this.post(`organization/create`, addPayload)
      .pipe(map((response: ApiResponse) => {
        return (response.result);
    }));
  }

  update(updatePayload: PayloadInterface): Observable<boolean> {
    return this.put(`organization/update`, updatePayload)
      .pipe(map((response: ApiResponse) => {
        return (response.result);
    }));
  }

   remove(id: string | number): Observable<boolean> {
    return this.delete(`organization/delete/${id}`).pipe(map((response: ApiResponse) => {
      return (response.result);
    }));
  }
}
