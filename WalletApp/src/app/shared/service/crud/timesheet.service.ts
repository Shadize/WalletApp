import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ApiService} from "@shared/service";
import {ApiResponse, CrudServiceInterface} from "@shared/model";
import {map} from "rxjs/operators";
import {Timesheet} from "@shared/model/dto/timesheet.interface";
import {TimesheetCreatePayload} from "@shared/model/payload/create/TimesheetCreatePayload.interface";
import {TimesheetUpdatePayload} from "@shared/model/payload/update/TimesheetUpdatePayload.interface";

@Injectable()
export class TimesheetService extends ApiService implements CrudServiceInterface {

  list = () : Observable<Timesheet[]> =>  {
    return this.get(`timesheet/list`).pipe(
      map((response: ApiResponse) => {
        return response.result ? response.data as Timesheet[] : [];
      })
    )
  }

  detail = (id: string | number) : Observable<Timesheet> => {
    return this.get(`timesheet/detail/${id}`).pipe(
      map((response: ApiResponse) => {
        return response.result ? response.data as Timesheet : {} as Timesheet;
      })
    )
  }

  create(payload: TimesheetCreatePayload): Observable<boolean> {
    return this.post(`timesheet/create`, payload).pipe(
      map((response: ApiResponse) => {
        return response.result;
      })
    )
  }

  update(payload: TimesheetUpdatePayload): Observable<boolean> {
    return this.put('timesheet/update', payload).pipe(
      map((response: ApiResponse) => {
        return response.result
      })
    )
  }

  remove(id: string | number): Observable<boolean> {
    return this.delete(`timesheet/delete/${id}`).pipe(
      map((response: ApiResponse) => {
        return (response.result)
      })
    )
  }
}
