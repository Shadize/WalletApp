import {Contract} from "@shared/model/entity/contract.interface";
export interface Company{
  companyId?: string;
  name: string;
  description: string;
  address: string;
  isManaged: boolean;
  isActive: boolean;
  isDeleted: boolean;
  deletedBy: string;
  contracts: Contract[];
}