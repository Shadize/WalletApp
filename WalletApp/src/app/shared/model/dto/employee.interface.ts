import {Company} from "@shared/model/dto/company.interface";
import {Skill} from "@shared/model/dto/skill.interface";
import {DtoInterface} from "@shared/model";
import {Timesheet} from "@shared/model/dto/timesheet.interface";
import {Contract} from "@shared/model/dto/contract.interface";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {Salary} from "@shared/model/dto/salary.interface";

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
  timesheets: Timesheet[];
  documents: Document[];
  contracts: Contract[];
  fleets: Fleet[];
  salaries: Salary[];

}
