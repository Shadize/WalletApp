import {Company} from "@shared/model/dto/company.interface";
import {Skill} from "@shared/model/dto/skill.interface";
import {PayloadInterface} from "@shared/model";

export interface EmployeeCreatePayloadInterface extends PayloadInterface{
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
