import {Component, OnInit} from '@angular/core';
import {Skill} from "@shared/model/dto/skill.interface";
import {SalaryService} from "@shared/service/crud/salary.service";
import {Salary} from "@shared/model/dto/salary.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {SalaryCreatePayloadInterface} from "@shared/model/payload/create/SalaryCreatePayload.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {SalaryCreateComponent} from "../../salary-create/salary-create.component";

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit{

  salaries: Salary[] = [];
  employees: Employee[] = [];
  selectedEmployee!: Employee;
  displayedColumns: string[] = ['createDate', 'title', 'comment', 'amount', 'employees', 'edit'];
  editSalary!: Salary;
  edited!: boolean;
  formGroup!: FormGroup;


  constructor(private salaryService: SalaryService,
              private employeeService: EmployeeService,
              private formBuilder: FormBuilder,
              public dialog: MatDialog) {
  }

/*
  this.formGroup = this.formBuilder.group({
    createDate: [this.editSalary.createDate, Validators.required],
    title: [this.editSalary.title, Validators.required],
    comment: [this.editSalary.comment, Validators.required],
    amount: [this.editSalary.amount, Validators.required],
    employee: [this.editSalary.employee, Validators.required]
  });

 */


  ngOnInit(): void {
    this.employeeService.list().subscribe(data => {
      this.employees = data
      })
    this.salaryService.list().subscribe(data => {
      this.salaries = data;
    })
    this.edited = false;


    this.formGroup = new FormGroup({
      createDate: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      employee: new FormControl('', Validators.required),
    })
  }


  /*=== OPERATIONS INSERT / DELETE / UPDATE ===*/

  insert(newDate: string, title: string, comment: string, createdAmount: string, employee: Employee) {
    // Conversion du string en date

    let createDate = new Date(newDate);

    // Conversion du string en Number
    const amount = parseInt(createdAmount);

    const newSalary: SalaryCreatePayloadInterface = {createDate, title, comment, amount,employee}
    let result = this.salaryService.create(newSalary);
    result.subscribe(r =>{
      console.log(r)
      this.RefreshData()
      })

  }

  edit(salary: Salary){
    console.log(salary)
  }

  delete(salary: Salary){
    this.salaryService.remove(salary.salaryId!).subscribe(response => {
      console.log(response)
      this.RefreshData()
    })
  }


  /*=== Actualisation des datasource pour l'actualisation dynamique dans le template ===*/

  RefreshData(){
    this.salaryService.list().subscribe(data => {
      this.salaries = data;
    })
  }

  /*=== METHODE DU FORMULAIRE ===*/

  cancelEdit() {
    this.edited = !this.edited;
  }

  openEdition(element: Salary) {

    this.editSalary = element;
    this.edited = true;

  }


  openCreateDialog(){
    let dialogRef = this.dialog.open(SalaryCreateComponent)
  }

}
