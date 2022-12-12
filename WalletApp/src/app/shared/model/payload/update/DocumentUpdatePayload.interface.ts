import {PayloadInterface} from "@shared/model";
import {Company} from "@shared/model/dto/company.interface";
import {Contract} from "@shared/model/dto/contract.interface";
import {Employee} from "@shared/model/dto/employee.interface";

export interface DocumentUpdatePayloadInterface extends PayloadInterface{
  documentId? : string;
  title : string;
  content : string;
  type : string;
  createDate : Date;
  company : Company;
  contract : Contract;
  employee: Employee;
}
