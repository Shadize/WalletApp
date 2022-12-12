import {Observable} from 'rxjs';
import {PayloadInterface} from './payload.interface';
import {ApiResponse} from './api-response.interface';
import {Contract} from "@shared/model/dto/contract.interface";
import {DtoInterface} from "@shared/model/dto.interface";

export interface CrudServiceInterface {
  list(): Observable<DtoInterface[]>;

  create(addPayload: PayloadInterface): Observable<DtoInterface>;

  update(updatePayload: PayloadInterface): Observable<DtoInterface>;

  delete(id: string | number): Observable<DtoInterface>;

  detail(id: string | number): Observable<DtoInterface>;
}
