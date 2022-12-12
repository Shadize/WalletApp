import {Injectable} from '@angular/core';
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Observable} from "rxjs";
import {ApiService, HttpService} from "@shared/service";
import {Contract} from "@shared/model/dto/contract.interface";
import {map} from "rxjs/operators";
import {Employee} from "@shared/model/dto/employee.interface";

@Injectable()
export class EmployeeService extends ApiService implements CrudServiceInterface{


  list = () : Observable<Employee[]> =>  {
    return this.get(`/contract/list`).pipe(map((response: ApiResponse) => {
      return (response.result) ? response.data as Employee[] : [];
    }));
  }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return this.post(this.api.baseUrl + "employee/create" , addPayload);
  }

  delete(id: string | number): Observable<ApiResponse> {
    return this.api.http.delete(this.api.baseUrl + `employee/delete/${id}`);
  }



  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.put(this.api.baseUrl + "employee/update/", updatePayload);
  }

  detail(id: string | number): Observable<ApiResponse> {
    return this.api.http.get(this.api.baseUrl + `employee/detail/${id}`);
  }
}
