import {Company} from "@shared/model/dto/company.interface";
import {Skill} from "@shared/model/dto/skill.interface";
import {DtoInterface} from "@shared/model";

export interface Employee extends DtoInterface{
  employeeId?: string;
  lastname: string;
  firstname: string;
  active: boolean;
  deletedBy: string;
  address: string;
  gender: string;
  birthday: Date;
  ssin: string;
  status: string;
  deleted: boolean;
  company: Company;
  skills: Skill[];
}
