import {Contract} from "@shared/model/dto/contract.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {PayloadInterface} from "@shared/model";

export interface TimesheetCreatePayload extends PayloadInterface {
  startDate: Date;
  startHours: Date;
  endHours: Date;
  comment: string;
  timesheetType: string;
  contract: Contract;
  employee: Employee;
}
