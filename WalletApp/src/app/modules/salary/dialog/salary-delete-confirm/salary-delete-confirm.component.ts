import {Component, Inject, OnInit} from '@angular/core';
import {Salary} from "@shared/model/dto/salary.interface";
import {SalaryService} from "@shared/service/crud/salary.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-salary-delete-confirm',
  templateUrl: './salary-delete-confirm.component.html',
  styleUrls: ['./salary-delete-confirm.component.scss']
})
export class SalaryDeleteConfirmComponent implements OnInit{

  salary!: Salary;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {salary: Salary}, private salaryService: SalaryService) {
  }

  // Récupération via l'injection du mat dialog data du salaire que j'ai envoyer
  // Dans la méthode d'ouverture de dialogue dans document.ts
  ngOnInit() {
    this.salary = this.data.salary;
  }


  // Suppression du salaire
  delete(){
    this.salaryService.remove(this.salary.salaryId!).subscribe(response => {
      console.log(response)
    })
  }

}
