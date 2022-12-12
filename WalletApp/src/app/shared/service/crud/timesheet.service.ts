import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ApiService} from "@shared/service";
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";

@Injectable()
export class TimesheetService implements CrudServiceInterface{

  constructor(private api: ApiService) {
  }

  list = () : Observable<ApiResponse> => {
    return this.api.http.get(this.api.baseUrl + `/timesheet/list`);
  }

  detail(id: string | number): Observable<ApiResponse> {
    return this.api.http.get(this.api.baseUrl + `/timesheet/detail/${id}`);
  }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.post(this.api.baseUrl + `/timesheet/create`, addPayload);
  }

  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.put(this.api.baseUrl + `/timesheet/update`, updatePayload);
  }

  delete(id: string | number): Observable<ApiResponse> {
    return this.api.http.delete(this.api.baseUrl + `/timesheet/delete/${id}`);
  }
}
