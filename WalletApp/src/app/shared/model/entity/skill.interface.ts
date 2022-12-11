import {Employee} from "@shared/model/entity/employee.interface";

export interface Skill {
   skillId?: string;
   title: string;
   description: string;
   employees: Employee[];
}
