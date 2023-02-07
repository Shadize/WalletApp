import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {Employee} from "@shared/model/dto/employee.interface";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {

  // On injecte le data dans le constructeur pour pouvoir l'utiliser dans le template
  constructor(@Inject(MAT_DIALOG_DATA) public employee: Employee,
              public dialog: MatDialog) { }

  ngOnInit(): void {

  }
}
