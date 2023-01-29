import {Component, OnInit} from '@angular/core';
import {Employee} from "@shared/model/dto/employee.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SalaryCreatePayloadInterface} from "@shared/model/payload/create/SalaryCreatePayload.interface";
import {SalaryService} from "@shared/service/crud/salary.service";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-salary-create',
  templateUrl: './salary-create.component.html',
  styleUrls: ['./salary-create.component.scss']
})
export class SalaryCreateComponent implements OnInit{

  employees: Employee[] = [];
  selectedEmployee!: Employee;
  edited!: boolean;
  formGroup!: FormGroup;
  filteredEmployees!: Employee[];
  searchTerm!: string;


  constructor(private salaryService: SalaryService,
              private employeeService: EmployeeService,
              public dialogRef: MatDialogRef<SalaryCreateComponent>) {
  }

  ngOnInit(): void {

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

  insert(newDate: string, title: string, comment: string, createdAmount: string, employee: Employee) {
    // Conversion du string en date

    let createDate = new Date(newDate);

    // Conversion du string en Number
    const amount = parseInt(createdAmount);

    const newSalary: SalaryCreatePayloadInterface = {createDate, title, comment, amount,employee}
    let result = this.salaryService.create(newSalary);
    result.subscribe(r =>{
      console.log(r)
    })

  }

  filterEmployees() {
    this.filteredEmployees = this.employees.filter(employee => {
      return (
        employee.firstname.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        employee.lastname.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
      );
    });
  }


}
