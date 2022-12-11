import {Company} from "@shared/model/entity/company.interface";
import {Skill} from "@shared/model/entity/skill.interface";

export interface Employee{
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