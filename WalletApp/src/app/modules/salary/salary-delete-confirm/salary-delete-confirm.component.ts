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


  constructor(@Inject(MAT_DIALOG_DATA) public data: Salary, private salaryService: SalaryService) {
    this.salary = data;
  }

  ngOnInit() {
  }

  delete(salary: Salary){
    console.log(salary)
    /*

    this.salaryService.remove(salary.salaryId!).subscribe(response => {
      console.log(response)
    })

     */
  }

}
