import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Salary} from "@shared/model/dto/salary.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {SkillUpdatePayloadInterface} from "@shared/model/payload/update/SkillUpdatePayload.interface";
import {SalaryUpdatePayloadInterface} from "@shared/model/payload/update/SalaryUpdatePayload.interface";
import {SalaryService} from "@shared/service/crud/salary.service";

@Component({
  selector: 'app-salary-edit',
  templateUrl: './salary-edit.component.html',
  styleUrls: ['./salary-edit.component.scss']
})
export class SalaryEditComponent implements OnInit{
  editSalary!: Salary;
  employees: Employee[] = [];
  formGroup!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {salary: Salary}, private employeeService: EmployeeService, private salaryService: SalaryService) {
  }

  ngOnInit() {

    this.editSalary = this.data.salary;

    this.employeeService.list().subscribe(data => {
      this.employees = data
    })

    this.formGroup = new FormGroup({
      createDate: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      employee: new FormControl('', Validators.required),
    })
  }

  edit(){
    let updatedSalary: SalaryUpdatePayloadInterface = {
      salaryId: this.editSalary.salaryId,
      createDate: this.editSalary.createDate,
      title: this.editSalary.title,
      comment: this.editSalary.comment,
      amount: this.editSalary.amount,
      employee: this.editSalary.employee
    }

    this.salaryService.update(updatedSalary).subscribe(response => {
        console.log(response)
    })
  }

}
