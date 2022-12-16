import { Injectable } from '@angular/core';
import {ApiService} from "@shared/service";
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Document} from "@shared/model/dto/document.interface";

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends ApiService implements CrudServiceInterface {

  list(): Observable<Document[]> {
    return this.get(`document/list`)
      .pipe(map((response: ApiResponse) => {
        return (response.result) ? response.data as Document[] : [];
      }));
  }


  detail(id: string | number) : Observable<Document>{
    return this.get(`document/detail/${id}`)
      .pipe(map((response: ApiResponse) => {
        return (response.result) ? response.data as Document : {} as Document;
      }));
  }

  create(addPayload: PayloadInterface): Observable<boolean> {
    return this.post(`document/create`, addPayload)
      .pipe(map((response: ApiResponse) => {
        return (response.result);
      }));
  }

  update(updatePayload: PayloadInterface): Observable<boolean> {
    return this.put(`document/update`, updatePayload)
      .pipe(map((response: ApiResponse) => {
        return (response.result);
      }));
  }

  remove(id: string | number): Observable<boolean> {
    return this.delete(`document/delete/${id}`).pipe(map((response: ApiResponse) => {
      return (response.result);
    }));
  }
}
