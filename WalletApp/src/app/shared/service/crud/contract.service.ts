import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ApiService} from "@shared/service";
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {Contract} from "@shared/model/dto/contract.interface";
import {map} from "rxjs/operators";

@Injectable()
export class ContractService extends ApiService implements CrudServiceInterface {



  list = () : Observable<Contract[]> =>  {
    return this.get(`/contract/list`).pipe(
      map((response: ApiResponse) => {
        return (response.result) ? response.data as Contract[] : [];
      })
    )
  }
  detail = (id: string | number) : Observable<Contract> => {
    return this.get(`/contract/detail/${id}`).pipe(
      map((response: ApiResponse) => {
        return (response.result) ? response.data as Contract : {} as Contract;
      })
    )
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
