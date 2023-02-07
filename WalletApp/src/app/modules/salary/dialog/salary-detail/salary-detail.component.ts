import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Salary} from "@shared/model/dto/salary.interface";

@Component({
  selector: 'app-salary-detail',
  templateUrl: './salary-detail.component.html',
  styleUrls: ['./salary-detail.component.scss']
})
export class SalaryDetailComponent implements OnInit {
  salary!: Salary;


  constructor(@Inject(MAT_DIALOG_DATA) public data: { salary: Salary }) {
  }

  // Récupération via l'injection du mat dialog data du salaire que j'ai envoyer
  // Dans la méthode d'ouverture de dialogue dans document.ts
  ngOnInit() {
    this.salary = this.data.salary;
  }


}
