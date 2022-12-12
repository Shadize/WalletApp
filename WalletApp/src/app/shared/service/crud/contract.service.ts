import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ApiService} from "@shared/service";
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";

@Injectable()
export class ContractService implements CrudServiceInterface{

  constructor(private api: ApiService) {
  }

  list = () : Observable<ApiResponse> => {
    return this.api.http.get(this.api.baseUrl + `/contract/list`);
  }

  detail = (id: string | number) : Observable<ApiResponse> => {
    return this.api.http.delete(this.api.baseUrl + `contract/delete/${id}`);
  }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.post(this.api.baseUrl + `/contract/create`, addPayload);
  }

  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.put(this.api.baseUrl + `/contract/update`, updatePayload);
  }

  delete(id: string | number): Observable<ApiResponse> {
    return this.api.http.delete(this.api.baseUrl + `/contract/delete/${id}`);
  }
}
