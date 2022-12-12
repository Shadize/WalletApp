import {Employee} from "@shared/model/dto/employee.interface";
import {PayloadInterface} from "@shared/model";

export interface FleetUpdatePayloadInterface extends PayloadInterface{
  fleetId?: string;
  tittle: string;
  description: string;
  type: string;
  cost: number;
  employee: Employee;
}
