import {PayloadInterface} from "@shared/model";
import {Company} from "@shared/model/dto/company.interface";

export interface OrganizationUpdatePayloadInterface extends PayloadInterface{
  organizationId?: string;
  name : string;
  description : string;
  company : Company;
}
