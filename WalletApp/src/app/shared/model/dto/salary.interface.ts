import {Employee} from "@shared/model/dto/employee.interface";
import {DtoInterface} from "@shared/model";

export interface Salary extends DtoInterface{
  salaryId? : string;
  createDate : Date;
  title : string;
  comment : string;
  amount : number;
  employee : Employee;
}
