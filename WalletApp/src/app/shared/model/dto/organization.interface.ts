import {Company} from "@shared/model/dto/company.interface";

export interface Organization{
  organizationId?: string;
  name : string;
  description : string;
  company : Company;
}
