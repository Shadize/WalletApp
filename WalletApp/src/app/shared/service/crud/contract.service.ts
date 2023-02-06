import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ApiService} from "@shared/service";
import {ApiResponse, CrudServiceInterface} from "@shared/model";
import {Contract} from "@shared/model/dto/contract.interface";
import {map} from "rxjs/operators";
import {ContractCreatePayload} from "@shared/model/payload/create/ContractCreatePayload.interface";
import {
  ContractUpdatePayload
} from "@shared/model/payload/update/ContractUpdatePayload.interface";

@Injectable({
  providedIn: 'root'
})
export class ContractService extends ApiService implements CrudServiceInterface {

  list = () : Observable<Contract[]> =>  {
    return this.get(`contract/list`).pipe(
      map((response: ApiResponse) => {
        return response.result ? response.data as Contract[] : [];
      })
    )

  }

  detail = (id: string | number) : Observable<Contract> => {
    return this.get(`contract/detail/${id}`).pipe(
      map((response: ApiResponse) => {
        return response.result ? response.data as Contract : {} as Contract;
      })
    )
  }

  create(payload: ContractCreatePayload): Observable<boolean> {
    return this.post(`contract/create/`, payload).pipe(
      map((response: ApiResponse) => {
        return response.result;
      })
    )
  }

  update(payload: ContractUpdatePayload): Observable<boolean> {
    return this.put('contract/update/', payload).pipe(
      map((response: ApiResponse) => {
        return response.result
      })
    )
  }

  remove(id: string | number): Observable<boolean> {
    return this.delete(`contract/delete/${id}`).pipe(
      map((response: ApiResponse) => {
        return (response.result)
      })
    )
  }
}
