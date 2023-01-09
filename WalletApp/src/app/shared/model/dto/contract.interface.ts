import {Company} from "@shared/model/dto/company.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {DtoInterface} from "@shared/model";
import {Timesheet} from "@shared/model/dto/timesheet.interface";

export interface Contract extends DtoInterface{
  contractId?: string;
  description: string;
  startDate: Date;
  endDate: Date;
  nbHoursByWeek: number;
  documents: Document[];
  timesheets: Timesheet[];
  employee: Employee;
  companyClient: Company;
  companyBusiness: Company;

}


