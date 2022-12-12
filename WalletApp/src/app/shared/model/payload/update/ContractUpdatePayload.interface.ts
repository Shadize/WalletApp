import {Company} from "@shared/model/dto/company.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {DtoInterface, PayloadInterface} from "@shared/model";

export interface ContractUpdateInterface extends PayloadInterface{
  contractId?: string;
  description: string;
  startDate: Date;
  endDate: Date;
  nbHoursByWeek: number;
  companies: Company[];
  employee: Employee;
}


