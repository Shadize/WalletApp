import {Company} from "@shared/model/dto/company.interface";
import {Contract} from "@shared/model/dto/contract.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {DtoInterface} from "@shared/model";

export interface Document extends DtoInterface{
  documentId? : string;
  title : string;
  content : string;
  type : string;
  createDate : Date;
  company : Company;
  contract : Contract;
  employee: Employee;
}
