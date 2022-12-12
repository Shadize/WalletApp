import {Observable} from 'rxjs';
import {PayloadInterface} from './payload.interface';
import {DtoInterface} from "@shared/model/dto.interface";

export interface CrudServiceInterface {
  list(): Observable<DtoInterface[]>;

  detail(id: string | number): Observable<DtoInterface>;

  create(addPayload: PayloadInterface):Observable<boolean>;

  update(updatePayload: PayloadInterface): Observable<boolean>;

  remove(id: string | number): Observable<boolean>;

}
