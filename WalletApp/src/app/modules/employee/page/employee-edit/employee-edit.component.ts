import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FormGroup} from "@angular/forms";
import {FleetFieldPrefabComponent} from "../../../fleet/component/fleet-field-prefab/fleet-field-prefab.component";
import {FleetUpdatePayloadInterface} from "@shared/model/payload/update/FleetUpdatePayload.interface";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private fleetService : FleetService,
              private router: Router) { }
  fleetId : string = '';
  fleet !: Fleet;
  formGroup!: FormGroup;
  @ViewChild('prefab') prefab!: FleetFieldPrefabComponent;

  formGroupFromChild(event: any){
    this.formGroup = event;
  }

  ngOnInit(): void {

    this.fleetId = this.route.snapshot.paramMap.get('id') || '';

    this.fleetService.detail(this.fleetId).subscribe(data => {
      this.fleet = data.data as Fleet;

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

    this.fleetService.update(payload).subscribe(data => {
      this.router.navigateByUrl('/dashboard/fleet').then(r => console.log(r));
    })
  }
}
