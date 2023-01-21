import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ApiService} from "@shared/service";
import {ApiResponse, CrudServiceInterface} from "@shared/model";
import {map} from "rxjs/operators";
import {Company} from "@shared/model/dto/company.interface";
import {CompanyCreatePayload} from "@shared/model/payload/create/CompanyCreatePayload.interface";
import {
  CompanyUpdatePayload
} from "@shared/model/payload/update/CompanyUpdatePayload.interface";

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends ApiService implements CrudServiceInterface {

  list = () : Observable<Company[]> =>  {
    return this.get(`company/list`).pipe(
      map((response: ApiResponse) => {
        return response.result ? response.data as Company[] : [];
      })
    )
  }

  detail = (id: string | number) : Observable<Company> => {
    return this.get(`company/detail/${id}`).pipe(
      map((response: ApiResponse) => {
        return response.result ? response.data as Company : {} as Company;
      })
    )
  }

  create(payload: CompanyCreatePayload): Observable<boolean> {
    return this.post(`company/create/`, payload).pipe(
      map((response: ApiResponse) => {
        return response.result;
      })
    )
  }

  update(payload: CompanyUpdatePayload): Observable<boolean> {
    return this.put('company/update/', payload).pipe(
      map((response: ApiResponse) => {
        return response.result
      })
    )
  }

  remove(id: string | number): Observable<boolean> {
    return this.delete(`company/delete/${id}`).pipe(
      map((response: ApiResponse) => {
        return (response.result)
      })
    )
  }
}
