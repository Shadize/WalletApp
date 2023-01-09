import {Contract} from "@shared/model/dto/contract.interface";
import {DtoInterface} from "@shared/model";
import {Employee} from "@shared/model/dto/employee.interface";
import {Organization} from "@shared/model/dto/organization.interface";

export interface Company extends DtoInterface{
  companyId?: string;
  name: string;
  description: string;
  address: string;
  isManaged: boolean;
  isActive: boolean;
  isDeleted: boolean;
  deletedBy: string;
  employees: Employee[];
  organization: Organization[];
  documents: Document[];
  contractsBusiness: Contract[];
  contractsClient: Contract[];
}
