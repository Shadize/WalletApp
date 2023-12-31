import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {FleetFieldPrefabComponent} from "../../component/fleet-field-prefab/fleet-field-prefab.component";
import {FleetUpdatePayloadInterface} from "@shared/model/payload/update/FleetUpdatePayload.interface";

@Component({
  selector: 'app-fleet-edit',
  templateUrl: './fleet-edit.component.html',
  styleUrls: ['./fleet-edit.component.scss']
})
export class FleetEditComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private fleetService : FleetService,
              private router: Router) { }
  fleetId : string = '';
  fleet !: Fleet;
  formGroup!: FormGroup;

  // On utilise le ViewChild pour récupérer le FieldPrefab pour avoir accès à certaines valeurs
  @ViewChild('prefab') prefab!: FleetFieldPrefabComponent;

  // On récupère le FormGroup du émit par le FieldPrefab pour lui assigner les valeurs du Fleet (un peu plus bas)
  formGroupFromChild(event: any){
    this.formGroup = event;
  }
  ngOnInit(): void {
    this.fleetId = this.route.snapshot.paramMap.get('id') || '';

    this.fleetService.detail(this.fleetId).subscribe(data => {
      this.fleet = data.data as Fleet;

      // On assigne les valeurs du Fleet à notre FormGroup
      this.formGroup.setValue({
        title: this.fleet.title,
        description: this.fleet.description,
        type: this.fleet.type,
        cost: this.fleet.cost,
        employee: this.fleet.employee
      })
    })
  }
  update(title: string, description: string, type: string, cost: string){

    let payload: FleetUpdatePayloadInterface = {fleetId:this.fleetId, title, description, type, cost: parseFloat(cost), employee: this.prefab?.employeeSelected};

    this.fleetService.update(payload).subscribe(() => {
      this.router.navigateByUrl('/dashboard/fleet');
    })
  }

}
