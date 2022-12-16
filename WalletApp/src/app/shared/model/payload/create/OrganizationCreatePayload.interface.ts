import {Company} from "@shared/model/dto/company.interface";
import {PayloadInterface} from "@shared/model";

export interface OrganizationCreatePayloadInterface extends PayloadInterface{
  organizationId?: string;
  name : string;
  description : string;
  company : Company;
}
