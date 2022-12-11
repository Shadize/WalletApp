import {Company} from "@shared/model/entity/company.interface";
import {Contract} from "@shared/model/entity/contract.interface";
import {Employee} from "@shared/model/entity/employee.interface";

export interface Document{
  documentId? : string;
  title : string;
  content : string;
  type : string;
  createDate : Date;
  company : Company;
  contract : Contract;
  employee: Employee;
}
