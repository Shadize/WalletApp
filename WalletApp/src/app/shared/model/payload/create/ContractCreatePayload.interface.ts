import {PayloadInterface} from "@shared/model";
import {Company} from "@shared/model/dto/company.interface";
import {Employee} from "@shared/model/dto/employee.interface";

export interface ContractCreatePayload extends PayloadInterface {
  description: string;
  startDate: Date;
  endDate: Date;
  nbHoursByWeek: number;
  companies: Company[];
  employee: Employee;
}
