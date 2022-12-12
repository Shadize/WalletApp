import {Contract} from "@shared/model/dto/contract.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {PayloadInterface} from "@shared/model";

export interface TimesheetUpdatePayload extends PayloadInterface {
  timesheetId?: string;
  startDate: Date;
  startHours: Date;
  endHours: Date;
  comment: string;
  timesheetType: string;
  contracts: Contract[];
  employee: Employee;
}
