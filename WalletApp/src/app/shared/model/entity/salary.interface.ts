import {Employee} from "@shared/model/entity/employee.interface";

export interface Salary{
  salaryId? : string;
  createDate : Date;
  title : string;
  comment : string;
  amount : number;
  employee : Employee;
}
