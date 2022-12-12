import {Employee} from "@shared/model/dto/employee.interface";

export interface Salary{
  salaryId? : string;
  createDate : Date;
  title : string;
  comment : string;
  amount : number;
  employee : Employee;
}
