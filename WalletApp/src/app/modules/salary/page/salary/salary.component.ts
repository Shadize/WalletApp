import {Component, OnDestroy, OnInit} from '@angular/core';
import {SalaryService} from "@shared/service/crud/salary.service";
import {Salary} from "@shared/model/dto/salary.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {MatDialog} from "@angular/material/dialog";
import {SalaryCreateComponent} from "../../dialog/salary-create/salary-create.component";
import {SalaryDeleteConfirmComponent} from "../../dialog/salary-delete-confirm/salary-delete-confirm.component";
import {SalaryEditComponent} from "../../dialog/salary-edit/salary-edit.component";
import {SalaryDetailComponent} from "../../dialog/salary-detail/salary-detail.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit, OnDestroy{

  subscription: Subscription[] = [];
  salaries: Salary[] = [];
  employees: Employee[] = [];
  displayedColumns: string[] = ['salaryId', 'createDate', 'title', 'comment', 'amount', 'employees', 'edit'];

  constructor(private salaryService: SalaryService,
              public dialog: MatDialog) {
  }

  // Récupération de la liste des salaires pour les afficher
  ngOnInit(): void {
    this.subscription.push(
      this.salaryService.list().subscribe(data => {
      this.salaries = data;
    }))
  }
  // Unsubscribe aux souscription pour éviter les fuites de mémoires
  ngOnDestroy(): void {
   this.subscription.forEach(subscription => subscription.unsubscribe());
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

    // Refresh  des données après chaque fermeture de dialog
    this.subscription.push(dialogRef.afterClosed().subscribe(result => {
      this.RefreshData();
    }))
  }

  openEditSalaryDialog(element: Salary){
    let dialogRef = this.dialog.open(SalaryEditComponent, {
      data: {salary: element}
    })

    this.subscription.push(dialogRef.afterClosed().subscribe(result => {
      this.RefreshData();
    }))
  }

  openDeleteConfirmationDialog(element: Salary){
    let dialogRef = this.dialog.open(SalaryDeleteConfirmComponent, {
      data: {salary: element}
    })
    this.subscription.push(dialogRef.afterClosed().subscribe(result => {
      this.RefreshData();
    }))
  }


  openDetailDialog(element: Salary) {
    let dialogRef = this.dialog.open(SalaryDetailComponent, {
      data: {salary: element}
    })
    this.subscription.push(dialogRef.afterClosed().subscribe(result => {
      this.RefreshData();
    }))
  }
}
