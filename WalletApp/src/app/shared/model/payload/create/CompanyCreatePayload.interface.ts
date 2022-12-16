import {Contract} from "@shared/model/dto/contract.interface";
import {PayloadInterface} from "@shared/model";
export interface CompanyCreatePayload extends PayloadInterface{
  name: string;
  description: string;
  address: string;
  isManaged: boolean;
  isActive: boolean;
  isDeleted: boolean;
  deletedBy: string;
  contracts: Contract[];
}
