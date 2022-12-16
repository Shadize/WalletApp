import {Employee} from "@shared/model/dto/employee.interface";
import {PayloadInterface} from "@shared/model";

export interface SkillUpdatePayloadInterface extends PayloadInterface{
  skillId?: string;
  title: string;
  description: string;
  employees: Employee[];
}
