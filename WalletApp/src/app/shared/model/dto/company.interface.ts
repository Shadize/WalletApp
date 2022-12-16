import {Contract} from "@shared/model/dto/contract.interface";
import {DtoInterface} from "@shared/model";

export interface Company extends DtoInterface{
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
