import {Company} from "@shared/model/entity/company.interface";
import {Employee} from "@shared/model/entity/employee.interface";

export interface Contract{
  contractId?: string;
  description: string;
  startDate: Date;
  endDate: Date;
  nbHoursByWeek: number;
  companies: Company[];
  employee: Employee;
}


