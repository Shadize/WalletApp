import {Injectable} from '@angular/core';
import {ApiResponse, CrudServiceInterface} from "@shared/model";
import {BehaviorSubject, Observable} from "rxjs";
import {ApiService} from "@shared/service";
import {map} from "rxjs/operators";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FleetCreatePayloadInterface} from "@shared/model/payload/create/FleetCreatePayload.interface";
import {FleetUpdatePayloadInterface} from "@shared/model/payload/update/FleetUpdatePayload.interface";


@Injectable(
  {providedIn: 'root'}
)
export class FleetService extends ApiService {//implements CrudServiceInterface{

  fleetList$: BehaviorSubject<Fleet[]> = new BehaviorSubject<Fleet[]>([]);
  fleet$: BehaviorSubject<Fleet> = new BehaviorSubject<Fleet>({});

  list2(id: string): void{
    this.get(`fleet/list`).pipe(
      map((response: ApiResponse) =>{
        this.fleetList$.next((response.data) ? response.data as Fleet[] : [] as Fleet[]);
      })
    ).subscribe()
  }

  detail(id: string | number): Observable<Fleet> {
    return this.get(`fleet/detail/${id}`).pipe(
      map((response: ApiResponse) => {
        return (response.result) ? response.data as Fleet : {} as Fleet;
      })
    )
  }

  list() : Observable<Fleet[]>{
    return this.get(`fleet/list`).pipe(
      map((response: ApiResponse) => {
        return (response.result) ? response.data as Fleet[] : [];
      })
    )
  }

  create(addPayload: FleetCreatePayloadInterface): Observable<boolean>{
    return this.post("fleet/create", addPayload).pipe(
      map((response: ApiResponse) => {
        return (response.result)
      })
    )
  }
  //
  // update(updatePayload: FleetUpdatePayloadInterface): Observable<boolean> {
  //   return this.put("fleet/update", updatePayload).pipe(
  //     map((response: ApiResponse) => {
  //       return (response.result)
  //     })
  //   )
  // }
  //
  //
  // remove(id: string | number): Observable<boolean> {
  //   return this.delete(`fleet/delete/${id}`).pipe(
  //     map((response: ApiResponse) => {
  //       return (response.result)
  //     })
  //   )
  // }
}
