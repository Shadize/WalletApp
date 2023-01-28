import {Component, OnInit} from '@angular/core';
import {SalaryService} from "@shared/service/crud/salary.service";
import {Salary} from "@shared/model/dto/salary.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {SalaryCreatePayloadInterface} from "@shared/model/payload/create/SalaryCreatePayload.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {SalaryCreateComponent} from "../../dialog/salary-create/salary-create.component";
import {SalaryDeleteConfirmComponent} from "../../dialog/salary-delete-confirm/salary-delete-confirm.component";
import {result} from "lodash";
import {SalaryEditComponent} from "../../dialog/salary-edit/salary-edit.component";

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit{

  salaries: Salary[] = [];
  employees: Employee[] = [];
  displayedColumns: string[] = ['createDate', 'title', 'comment', 'amount', 'employees', 'edit'];
  formGroup!: FormGroup;


  constructor(private salaryService: SalaryService,
              private employeeService: EmployeeService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.employeeService.list().subscribe(data => {
      this.employees = data
      })
    this.salaryService.list().subscribe(data => {
      this.salaries = data;
    })


    this.formGroup = new FormGroup({
      createDate: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      employee: new FormControl('', Validators.required),
    })
  }
  /*=== Actualisation des datasource pour l'actualisation dynamique dans le template ===*/

  RefreshData(){
    this.salaryService.list().subscribe(data => {
      this.salaries = data;
    })
  }


  /*=== Méthodes liées aux dialogues ===*/


  openCreateSalaryDialog(){
    let dialogRef = this.dialog.open(SalaryCreateComponent)

    dialogRef.afterClosed().subscribe(result => {
      this.RefreshData();
    })
  }

  openEditSalaryDialog(element: Salary){
    let dialogRef = this.dialog.open(SalaryEditComponent, {
      data: {salary: element}
    })

    dialogRef.afterClosed().subscribe(result => {
      this.RefreshData();
    })
  }

  openDeleteConfirmationDialog(element: Salary){
    let dialogRef = this.dialog.open(SalaryDeleteConfirmComponent, {
      data: {salary: element}
    })
    dialogRef.afterClosed().subscribe(result => {
      this.RefreshData();
    })
  }



}
