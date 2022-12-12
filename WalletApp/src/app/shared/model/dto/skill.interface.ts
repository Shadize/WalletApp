import {Employee} from "@shared/model/dto/employee.interface";

export interface Skill {
   skillId?: string;
   title: string;
   description: string;
   employees: Employee[];
}
