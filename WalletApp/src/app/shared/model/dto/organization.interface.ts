import {Company} from "@shared/model/dto/company.interface";
import {DtoInterface} from "@shared/model";

export interface Organization extends DtoInterface{
  organizationId?: string;
  name : string;
  description : string;
  company : Company;
}
