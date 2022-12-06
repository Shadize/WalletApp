import {Contract} from "@shared/model/entity/contract.interface";
import {Employee} from "@shared/model/entity/employee.interface";

export interface Timesheet {
  timesheetId?: string;
  startDate: Date;
  startHours: Date;
  endHours: Date;
  comment: string;
  timesheetType: string;
  contracts: Contract[];
  employee: Employee;
}
