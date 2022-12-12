import {Observable} from 'rxjs';
import {PayloadInterface} from './payload.interface';
import {ApiResponse} from './api-response.interface';
import {Contract} from "@shared/model/dto/contract.interface";
import {DtoInterface} from "@shared/model/dto.interface";

export interface CrudServiceInterface {
  list(): Observable<DtoInterface[]>;

  detail(id: string | number): Observable<DtoInterface>;

  create(addPayload: PayloadInterface): boolean;

  update(updatePayload: PayloadInterface): boolean;

  delete(id: string | number): boolean;

}
