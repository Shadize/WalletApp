import {Component, OnInit, ViewChild} from '@angular/core';
import {FleetService} from "@shared/service/crud/fleet.service";
import {Router} from "@angular/router";
import {FleetFieldPrefabComponent} from "../../../fleet/component/fleet-field-prefab/fleet-field-prefab.component";
import {FormGroup} from "@angular/forms";
import {Company} from "@shared/model/dto/company.interface";
import {Skill} from "@shared/model/dto/skill.interface";
import {Timesheet} from "@shared/model/dto/timesheet.interface";
import {Document} from "@shared/model/dto/document.interface";
import {Contract} from "@shared/model/dto/contract.interface";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {Salary} from "@shared/model/dto/salary.interface";

@Component({
  selector: 'app-employee-insert',
  templateUrl: './employee-insert.component.html',
  styleUrls: ['./employee-insert.component.scss']
})
export class EmployeeInsertComponent implements OnInit{

  constructor(private fleetService: FleetService,
              private router: Router) {
  }

  @ViewChild('prefab') prefab!: FleetFieldPrefabComponent;
  formGroup !: FormGroup;
  formGroupFromChild(event: any){
    this.formGroup = event;
  }
  ngOnInit() {

  }

  insert(){}
  // insert(lastname: string, firstname : string, active : boolean, deletedBy: string, address: string,
  //        gender: string, birthday: Date, ssin: string, status: string, deleted: boolean, company: Company,
  //        skills: Skill[], timesheets: Timesheet[], documents: Document[], contracts: Contract[], fleets: Fleet[], salaries: Salary[]) {
  //
  //   let payload = this.formGroup.value;
  // }
}
