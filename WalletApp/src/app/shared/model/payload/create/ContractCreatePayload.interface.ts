import {PayloadInterface} from "@shared/model";
import {Company} from "@shared/model/dto/company.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {Timesheet} from "@shared/model/dto/timesheet.interface";

export interface ContractCreatePayload extends PayloadInterface {
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
