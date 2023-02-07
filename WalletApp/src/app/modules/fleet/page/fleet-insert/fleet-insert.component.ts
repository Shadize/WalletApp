import {AfterViewInit, Component, OnInit, Output, ViewChild} from '@angular/core';
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {FleetCreatePayloadInterface} from "@shared/model/payload/create/FleetCreatePayload.interface";
import {FleetService} from "@shared/service/crud/fleet.service";
import {Router} from "@angular/router";
import {isNil} from "lodash";
import {MatOption} from "@angular/material/core";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FleetFieldPrefabComponent} from "../../component/fleet-field-prefab/fleet-field-prefab.component";
@Component({
  selector: 'app-fleet-insert',
  templateUrl: './fleet-insert.component.html',
  styleUrls: ['./fleet-insert.component.scss'],
  styles: ['element.style {width: 100%}']
})
export class FleetInsertComponent implements OnInit{

  constructor(private fleetService: FleetService,
              private router: Router) {
  }
  // On utilise le ViewChild pour récupérer le FieldPrefab pour avoir accès à certaines valeurs lors de l'insert
  @ViewChild('prefab') prefab!: FleetFieldPrefabComponent;
  formGroup !: FormGroup;
  formGroupFromChild(event: any){
    this.formGroup = event;
  }
  ngOnInit() {

  }

  // On insert la data
  insert(title: string, description: string, type: string, cost: string)
  {
    let payload : FleetCreatePayloadInterface = {title, description, type, cost: parseFloat(cost), employee: this.prefab?.employeeSelected};

    this.fleetService.create(payload).subscribe(() => {
      this.router.navigateByUrl('/dashboard/fleet');
    });

  };
}

