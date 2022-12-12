import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ApiService} from "@shared/service";
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";

@Injectable()
export class TimesheetService implements CrudServiceInterface{

  constructor(private api: ApiService) {
  }

  list = () : Observable<ApiResponse> => {
    return this.api.http.get(`/timesheet/list`);
  }

  create(addPayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.post(`/timesheet/create`, addPayload);
  }

  update(updatePayload: PayloadInterface): Observable<ApiResponse> {
    return this.api.http.put(`/timesheet/update`, updatePayload);
  }

  delete(id: string | number): Observable<ApiResponse> {
    return this.api.http.delete(`/timesheet/delete/${id}`);
  }
}
