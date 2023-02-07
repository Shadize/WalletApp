import {Injectable} from '@angular/core';
import {ApiResponse, CrudServiceInterface} from "@shared/model";
import {Observable} from "rxjs";
import {ApiService} from "@shared/service";
import {map} from "rxjs/operators";
import {Skill} from "@shared/model/dto/skill.interface";
import {SkillUpdatePayloadInterface} from "@shared/model/payload/update/SkillUpdatePayload.interface";
import {SkillCreatePayloadInterface} from "@shared/model/payload/create/SkillCreatePayload.interface";

@Injectable({
  providedIn: 'root'
})
export class SkillService extends ApiService implements CrudServiceInterface{

  detail(id: string | number): Observable<Skill> {
    return this.get(`skill/detail/${id}`).pipe(
      map((response: ApiResponse) => {
        return (response.result) ? response.data as Skill : {} as Skill;
      })
    )
  }

  list() : Observable<Skill[]>{
    return this.get(`skill/list`).pipe(
      map((response: ApiResponse) => {
        return (response.result) ? response.data as Skill[] : [];
      })
    )
  }

  create(addPayload: SkillCreatePayloadInterface): Observable<boolean>{
    return this.post("skill/create", addPayload).pipe(
      map((response: ApiResponse) => {
        return (response.result)
      })
    )
  }

  update(updatePayload: SkillUpdatePayloadInterface): Observable<boolean> {
    return this.put("skill/update", updatePayload).pipe(
      map((response: ApiResponse) => {
        return (response.result)
      })
    )
  }


  remove(id: string | number): Observable<boolean> {
    return this.delete(`skill/delete/${id}`).pipe(
      map((response: ApiResponse) => {
        return (response.result)
      })
    )
  }
}
