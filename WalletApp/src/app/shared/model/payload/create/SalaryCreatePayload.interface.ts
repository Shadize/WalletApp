import { PayloadInterface} from "@shared/model";
import {Employee} from "@shared/model/dto/employee.interface";

export interface SalaryCreatePayloadInterface extends PayloadInterface{
  salaryId? : string;
  createDate : Date;
  title : string;
  comment : string;
  amount : number;
  employee : Employee;
}
