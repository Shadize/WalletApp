import {Employee} from "@shared/model/entity/employee.interface";

export interface Skill {
   skillId?: string;
   tittle: string;
   description: string;
   employees: Employee[];
}
