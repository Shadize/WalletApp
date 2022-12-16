import {Employee} from "@shared/model/dto/employee.interface";
import {PayloadInterface} from "@shared/model";

export interface SkillCreatePayloadInterface extends PayloadInterface{
  title: string;
  description: string;
  employees: Employee[];
}
