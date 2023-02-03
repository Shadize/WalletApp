import {Component, OnInit, ViewChild} from '@angular/core';
import {FleetService} from "@shared/service/crud/fleet.service";
import {Router} from "@angular/router";
import {FleetFieldPrefabComponent} from "../../../fleet/component/fleet-field-prefab/fleet-field-prefab.component";
import {FormGroup} from "@angular/forms";

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

  insert(){

  }
}
