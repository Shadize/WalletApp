import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FleetFieldPrefabComponent} from "../../../fleet/component/fleet-field-prefab/fleet-field-prefab.component";
import {FleetUpdatePayloadInterface} from "@shared/model/payload/update/FleetUpdatePayload.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {EmployeeFieldPrefabComponent} from "../../component/employee-field-prefab/employee-field-prefab.component";
import {of} from "rxjs";
import {SkillService} from "@shared/service/crud/skill.service";
import {Skill} from "@shared/model/dto/skill.interface";
import {EmployeeUpdatePayloadInterface} from "@shared/model/payload/update/EmployeeUpdatePayload.interface";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private employeeService : EmployeeService,
              private skillService : SkillService,
              private router: Router) { }
  employeeId : string = '';
  employee !: Employee;
  formGroup!: FormGroup;
  @ViewChild('prefab') prefab!: EmployeeFieldPrefabComponent;

  formGroupFromChild(event: any){
    this.formGroup = event;
  }

  ngOnInit(): void {

    this.employeeId = this.route.snapshot.paramMap.get('id') || '';

    this.employeeService.detail(this.employeeId).subscribe(data => {
      this.employee = data as Employee;



      this.formGroup.setValue({
        lastname: this.employee.lastname,
        firstname: this.employee.firstname,
        address: this.employee.address,
        active: this.employee.active,
        deletedBy: this.employee.deletedBy,
        gender: this.employee.gender,
        birthday: this.employee.birthday,
        ssin: this.employee.ssin,
        status: this.employee.status,
        deleted: this.employee.deleted,
        company: this.employee.company,

        skills: (''),
        timesheets:  (''),
        documents: (''),
        contracts:(''),
        fleets: (''),
        salaries: ('')

      });

      this.prefab.skillAssigned = this.employee.skills.slice();
      this.prefab.skillAssigned$ = of(this.prefab.skillAssigned.slice());
      this.prefab.timesheetAssigned = this.employee.timesheets.slice();
      this.prefab.timesheetAssigned$ = of(this.prefab.timesheetAssigned.slice());
      this.prefab.documentAssigned = this.employee.documents.slice();
      this.prefab.documentAssigned$ = of(this.prefab.documentAssigned.slice());
      this.prefab.contractAssigned = this.employee.contracts.slice();
      this.prefab.contractAssigned$ = of(this.prefab.contractAssigned.slice());
      this.prefab.fleetAssigned = this.employee.fleets.slice();
      this.prefab.fleetAssigned$ = of(this.prefab.fleetAssigned.slice());
      this.prefab.salaryAssigned = this.employee.salaries.slice();
      this.prefab.salaryAssigned$ = of(this.prefab.salaryAssigned.slice());

    });


  }
  update() {

    let payload: EmployeeUpdatePayloadInterface = {
      employeeId: this.employeeId,
      lastname: this.formGroup.value.lastname,
      firstname: this.formGroup.value.firstname,
      active: this.formGroup.value.active,
      deletedBy: this.formGroup.value.deletedBy,
      address: this.formGroup.value.address,
      gender: this.formGroup.value.gender,
      birthday: new Date(this.formGroup.value.birthday),
      ssin: this.formGroup.value.ssin,
      status: this.formGroup.value.status,
      deleted: this.formGroup.value.deleted,
      company: this.formGroup.value.company,
      skills: this.prefab.skillAssigned,
      timesheets: this.prefab.timesheetAssigned,
      documents: this.prefab.documentAssigned,
      contracts: this.prefab.contractAssigned,
      fleets: this.prefab.fleetAssigned,
      salaries: this.prefab.salaryAssigned
    };



    this.employeeService.update(payload).subscribe(data => {


      this.router.navigateByUrl('/dashboard/employee');
    });
  }







}
