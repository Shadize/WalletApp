import { Injectable } from '@angular/core';
import {EmployeeService} from "@shared/service/crud/employee.service";
import {SalaryService} from "@shared/service/crud/salary.service";
import {TimesheetService} from "@shared/service/crud/timesheet.service";
import {ContractService} from "@shared/service/crud/contract.service";
import {FleetService} from "@shared/service/crud/fleet.service";
import {DocumentService} from "@shared/service/crud/document.service";
import {SkillService} from "@shared/service/crud/skill.service";
import {CompanyService} from "@shared/service/crud/company.service";
import {Employee} from "@shared/model/dto/employee.interface";
import {isNil} from "lodash";
import {Contract} from "@shared/model/dto/contract.interface";

@Injectable({
  providedIn: 'root'
})
export class EntityManagerService {

  constructor(private employeeService: EmployeeService,
              private salaryService: SalaryService,
              private timesheetService: TimesheetService,
              private contractService: ContractService,
              private fleetService: FleetService,
              private documentService: DocumentService,
              private skillService: SkillService,
              private companyService: CompanyService) { }


  onEmployeeDelete(employee: Employee){
    console.log(employee);
    let timesheets = employee.timesheets;
    let contracts = employee.contracts;
    let salaries = employee.salaries;

    if(!isNil(timesheets)){
      for(let timesheet of timesheets){

        this.timesheetService.remove(timesheet.timesheetId!).subscribe();
      }
    }
    if(!isNil(contracts)){
      for(let contract of contracts){
        this.contractService.remove(contract.contractId!).subscribe();
      }
    }
    if(!isNil(salaries)){
      for(let salary of salaries){
        this.salaryService.remove(salary.salaryId!).subscribe();
      }
    }
  }

  onContractDelete(contract: Contract) {
    let timesheets = contract.timesheets;
    if(!isNil(timesheets)){
      for(let timesheet of timesheets){
        this.timesheetService.remove(timesheet.timesheetId!).subscribe();
      }
    }
  }

  onEmployeeUpdate(employee: Employee){
    let timesheets = employee.timesheets;
    let contracts = employee.contracts;
    let salaries = employee.salaries;

    if(!isNil(timesheets)){
      for(let timesheet of timesheets){
        this.timesheetService.update(timesheet);
      }
    }
    if(!isNil(contracts)){
      for(let contract of contracts){
        this.contractService.update(contract);
      }
    }
    if(!isNil(salaries)){
      for(let salary of salaries){
        this.salaryService.update(salary);
      }
    }
  }





}
