import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ApiService} from "@shared/service";
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";

@Injectable()
export class CompanyService implements CrudServiceInterface{

  constructor(private api: ApiService) {
  }

  list = () : Observable<ApiResponse> => {
    return this.api.http.get(this.api.baseUrl + `/company/list`);
  }

  detail(id: string | number): Observable<ApiResponse> {
    return this.api.http.get(this.api.baseUrl + `company/detail/${id}`);
  }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.post(this.api.baseUrl +`/company/create`, addPayload);
  }

  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.put(this.api.baseUrl +`/company/update`, updatePayload);
  }

  delete(id: string | number): Observable<ApiResponse> {
    return this.api.http.delete(this.api.baseUrl +`/company/delete/${id}`);
  }
}
