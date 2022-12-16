import {Employee} from "@shared/model/dto/employee.interface";
import {DtoInterface} from "@shared/model";

export interface Fleet extends DtoInterface{
  fleetId?: string;
  tittle: string;
  description: string;
  type: string;
  cost: number;
  employee: Employee;
}
