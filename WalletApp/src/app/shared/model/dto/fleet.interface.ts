import {Employee} from "@shared/model/dto/employee.interface";

export interface Fleet{
  fleetId?: string;
  tittle: string;
  description: string;
  type: string;
  cost: number;
  employee: Employee;
}
