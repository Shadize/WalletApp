import {Contract} from "@shared/model/dto/contract.interface";
import {PayloadInterface} from "@shared/model";
export interface CompanyUpdatePayload extends PayloadInterface{
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
