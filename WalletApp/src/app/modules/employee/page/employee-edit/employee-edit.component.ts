import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FormGroup} from "@angular/forms";
import {FleetFieldPrefabComponent} from "../../../fleet/component/fleet-field-prefab/fleet-field-prefab.component";
import {FleetUpdatePayloadInterface} from "@shared/model/payload/update/FleetUpdatePayload.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {EmployeeFieldPrefabComponent} from "../../component/employee-field-prefab/employee-field-prefab.component";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private employeeService : EmployeeService,
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
        address: this.employee.address

        //AJOUTER LA SUITE

      })
    })


  }
  update(){


  }
}
