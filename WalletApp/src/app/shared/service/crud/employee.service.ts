import {Injectable} from '@angular/core';
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";
import {ApiService, HttpService} from "@shared/service";
import {Contract} from "@shared/model/dto/contract.interface";
import {map} from "rxjs/operators";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeCreatePayloadInterface} from "@shared/model/payload/create/EmployeeCreatePayload.interface";
import {EmployeeUpdatePayloadInterface} from "@shared/model/payload/update/EmployeeUpdatePayload.interface";

@Injectable()
export class EmployeeService extends ApiService implements CrudServiceInterface{

    detail(id: string | number): Observable<Employee> {
    return this.get(`employee/detail/${id}`).pipe(
      map((response: ApiResponse) => {
      return (response.result) ? response.data as Employee : {} as Employee;
      })
    )
  }

  list() : Observable<Employee[]>{
    return this.get(`employee/list`).pipe(
      map((response: ApiResponse) => {
      return (response.result) ? response.data as Employee[] : [];
      })
    )
  }

  create(addPayload: EmployeeCreatePayloadInterface): Observable<boolean>{
    return this.post("employee/create", addPayload).pipe(
      map((response: ApiResponse) => {
        return (response.result)
      })
    )
  }

  update(updatePayload: EmployeeUpdatePayloadInterface): Observable<boolean> {
    return this.put("employee/update", updatePayload).pipe(
      map((response: ApiResponse) => {
        return (response.result)
      })
    )
  }


  remove(id: string | number): Observable<boolean> {
    return this.delete(`employee/delete/${id}`).pipe(
      map((response: ApiResponse) => {
        return (response.result)
      })
    )
  }


}
