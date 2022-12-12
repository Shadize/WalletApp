import {Employee} from "@shared/model/dto/employee.interface";
import {PayloadInterface} from "@shared/model";

export interface FleetCreatePayloadInterface extends PayloadInterface{
  tittle: string;
  description: string;
  type: string;
  cost: number;
  employee: Employee;
}
