import { Injectable } from '@angular/core';
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";
import {ApiService} from "@shared/service";
import {map} from "rxjs/operators";
import {Salary} from "@shared/model/dto/salary.interface";

@Injectable({
  providedIn: 'root'
})
export class SalaryService extends ApiService implements CrudServiceInterface{

  list(): Observable<Salary[]> {
    return this.get(`salary/list`)
      .pipe(map((response: ApiResponse) => {
        return (response.result) ? response.data as Salary[] : [];
      }));
  }


  detail(id: string | number) : Observable<Salary>{
    return this.get(`salary/detail/${id}`)
      .pipe(map((response: ApiResponse) => {
        return (response.result) ? response.data as Salary : {} as Salary;
      }));
  }

  create(addPayload: PayloadInterface): Observable<boolean> {
    return this.post(`salary/create`, addPayload)
      .pipe(map((response: ApiResponse) => {
        return (response.result);
      }));
  }

  update(updatePayload: PayloadInterface): Observable<boolean> {
    return this.put(`salary/update`, updatePayload)
      .pipe(map((response: ApiResponse) => {
        return (response.result);
      }));
  }

  remove(id: string | number): Observable<boolean> {
    return this.delete(`salary/delete/${id}`).pipe(map((response: ApiResponse) => {
      return (response.result);
    }));
  }
}
