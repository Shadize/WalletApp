import {Component, OnDestroy, OnInit} from '@angular/core';
import {Employee} from "@shared/model/dto/employee.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SalaryCreatePayloadInterface} from "@shared/model/payload/create/SalaryCreatePayload.interface";
import {SalaryService} from "@shared/service/crud/salary.service";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-salary-create',
  templateUrl: './salary-create.component.html',
  styleUrls: ['./salary-create.component.scss']
})
export class SalaryCreateComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  employees: Employee[] = [];
  selectedEmployee!: Employee;
  edited!: boolean;
  formGroup!: FormGroup;

  constructor(private salaryService: SalaryService,
              private employeeService: EmployeeService) {
  }

  // Récupération de la liste des employee pour la création de salaire
  ngOnInit(): void {

   // this.subscription =
      this.employeeService.list().subscribe(data => {
      this.employees = data
    })

    // Form group avec Validator
    // Création d'un Validator Pattern pour amount pour obliger à mettre uniquement des chiffres
    this.formGroup = new FormGroup({
      createDate: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      employee: new FormControl('', Validators.required),
    })
  }

  // Unsubscribe aux souscription pour éviter les fuites de mémoires
  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }

  insert(newDate: string, title: string, comment: string, createdAmount: string, employee: Employee) {
    // Conversion du string en date


    let createDate = new Date(newDate);

    // Conversion du string en Number
    const amount = parseInt(createdAmount);

    // Création d'un payload pour le insert et récupération du résultat dans la console
    const newSalary: SalaryCreatePayloadInterface = {createDate, title, comment, amount, employee}
    let result = this.salaryService.create(newSalary);
    result.subscribe(r => {
      console.log(r)
    })
  }


}
