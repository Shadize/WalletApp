import {Component, OnInit} from '@angular/core';
import {Skill} from "@shared/model/dto/skill.interface";
import {SalaryService} from "@shared/service/crud/salary.service";
import {Salary} from "@shared/model/dto/salary.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit{

  dataSource: Salary[] = [];
  // employees: Employee[] = [];

  columnsToDisplay: string[] = ['date', 'title', 'comment', 'amount', 'employee', 'edit'];

  constructor(private salaryService: SalaryService, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
/*
      this.employeeService.list().subscribe(data => {
        this.employees = data
      })

 */
  }

  edit(skill: Skill){
    console.log(skill)
  }

  delete(skill: Skill){
    this.salaryService.remove(skill.skillId!).subscribe(response => {
      console.log(response)
    })
  }

  insert(date: string, title: string, comment: string, amount: string, employee: Employee) {
      const newdate = new Date(date);
      console.log(this.selectedEmployee.firstname);
  }




   employees: ({ birthday: Date; firstname: string; address: string; gender: string; documents: null; active: boolean; fleets: null; contracts: null; deletedBy: string; lastname: string; skills: null; ssin: string; deleted: boolean; salaries: null; timesheets: null; company: null; status: string } | { birthday: Date; firstname: string; address: string; gender: string; documents: null; active: boolean; fleets: null; contracts: null; deletedBy: string; lastname: string; skills: null; ssin: string; deleted: boolean; salaries: null; timesheets: null; company: null; status: string } | { birthday: Date; firstname: string; address: string; gender: string; documents: null; active: boolean; fleets: null; contracts: null; deletedBy: string; lastname: string; skills: null; ssin: string; deleted: boolean; salaries: null; timesheets: null; company: null; status: string })[] = [
    {
      lastname: "Smith",
      firstname: "John",
      active: true,
      deletedBy: "",
      address: "123 Main St",
      gender: "male",
      birthday: new Date("1990-01-01"),
      ssin: "123-45-6789",
      status: "active",
      deleted: false,
      company: null,
      skills: null,
      timesheets: null,
      documents: null,
      contracts: null,
      fleets: null,
      salaries: null
    },
    {
      lastname: "Johnson",
      firstname: "Jane",
      active: true,
      deletedBy: "",
      address: "456 Park Ave",
      gender: "female",
      birthday: new Date("1995-07-07"),
      ssin: "987-65-4321",
      status: "active",
      deleted: false,
      company: null,
      skills: null,
      timesheets: null,
      documents: null,
      contracts: null,
      fleets: null,
      salaries: null
    },
    {
      lastname: "Williams",
      firstname: "Bob",
      active: true,
      deletedBy: "",
      address: "789 Elm St",
      gender: "male",
      birthday: new Date("1985-12-12"),
      ssin: "111-11-1111",
      status: "active",
      deleted: false,
      company: null,
      skills: null,
      timesheets: null,
      documents: null,
      contracts: null,
      fleets: null,
      salaries: null
    }
  ];
  selectedEmployee!: Employee;

}
