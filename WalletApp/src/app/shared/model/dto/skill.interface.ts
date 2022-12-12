import {Employee} from "@shared/model/dto/employee.interface";
import {DtoInterface} from "@shared/model";

export interface Skill extends DtoInterface{
   skillId?: string;
   title: string;
   description: string;
   employees: Employee[];
}
