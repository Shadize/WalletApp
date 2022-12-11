import { Injectable } from '@angular/core';
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService implements CrudServiceInterface{

  constructor() { }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return undefined;
  }

  delete(id: string | number): Observable<ApiResponse> {
    return undefined;
  }

  list(): void {
  }

  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return undefined;
  }
}
