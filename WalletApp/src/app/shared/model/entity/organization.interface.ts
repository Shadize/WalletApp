import {Company} from "@shared/model/entity/company.interface";

export interface Organization{
  organizationId?: string;
  name : string;
  description : string;
  company : Company;
}
