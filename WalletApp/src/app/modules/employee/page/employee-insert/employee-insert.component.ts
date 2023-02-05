import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {Company} from "@shared/model/dto/company.interface";
import {Document} from "@shared/model/dto/document.interface";
import {EmployeeCreatePayloadInterface} from "@shared/model/payload/create/EmployeeCreatePayload.interface";
import {EmployeeFieldPrefabComponent} from "../../component/employee-field-prefab/employee-field-prefab.component";
import {EmployeeService} from "@shared/service/crud/employee.service";

@Component({
  selector: 'app-employee-insert',
  templateUrl: './employee-insert.component.html',
  styleUrls: ['./employee-insert.component.scss']
})
export class EmployeeInsertComponent implements OnInit{

  constructor(private employeeService:EmployeeService,
              private router: Router) {
  }

  @ViewChild('prefab') prefab!: EmployeeFieldPrefabComponent;
  formGroup !: FormGroup;
  formGroupFromChild(event: any){
    this.formGroup = event;
  }
  ngOnInit() {

  }

  //insert(){}

  // insert(lastname: string, firstname : string, active : boolean, deletedBy: string, address: string,
  //        gender: string, birthday: Date, ssin: string, status: string, deleted: boolean, company: Company,
  //        skills: Skill[], timesheets: Timesheet[], documents: Document[], contracts: Contract[], fleets: Fleet[], salaries: Salary[]) {
  //
  //   let payload = this.formGroup.value;
  // }
  insert(lastname: string, firstname : string, address: string,
         gender: string, birthday: string, ssin: string, status: string) {

    let newDate;
    if(birthday === '')
      newDate = undefined;
    else
      newDate = new Date(birthday);



    let payload: EmployeeCreatePayloadInterface = {lastname, firstname, active: true, deletedBy: '', address, gender,
                                                    birthday: newDate, ssin, status, deleted: false, company: this.prefab.companySelected!, skills: this.prefab.skillAssigned,
                                                    timesheets: this.prefab.timesheetAssigned, documents: this.prefab.documentAssigned,
                                                    contracts: this.prefab.contractAssigned, fleets: this.prefab.fleetAssigned, salaries: this.prefab.salaryAssigned};

    console.log(payload);

    this.employeeService.create(payload).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/dashboard/employee');
    });
  }
}
