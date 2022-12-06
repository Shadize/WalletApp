import {Employee} from "@shared/model/entity/employee.interface";

export interface Fleet{
  fleetId?: string;
  tittle: string;
  description: string;
  type: string;
  cost: number;
  employee: Employee;
}
