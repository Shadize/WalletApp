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

  constructor(private employeeService: EmployeeService,
              private fleetService: FleetService,
              private router: Router) {
  }

  @ViewChild('prefab') prefab?: FleetFieldPrefabComponent;





  employeeInput = new FormControl <string | Employee>('');
  employeeList: Employee[] = [];
  employeeFiltered?: Observable<Employee[]>;
  employeeSelected: Employee | undefined;

  formGroup !: FormGroup;

  messageFromChild(event: any){
    this.formGroup = event;
    console.log(this.formGroup)
  }
  ngOnInit() {

  }


  insert(title: string, description: string, type: string, cost: string)
  {
    let payload : FleetCreatePayloadInterface = {title, description, type, cost: parseFloat(cost), employee: this.prefab?.employeeSelected};

    this.fleetService.create(payload).subscribe(data => {
      this.router.navigateByUrl('/dashboard/fleet');
    });


  };

  // insert(title: string, description: string, type: string, cost: string, employee: Employee)
  // {
  //   let payload: FleetCreatePayloadInterface = {title, description, type, cost: parseFloat(cost)};
  //   this.subList.push(
  //     this.fleetService.create(payload).subscribe(data => {
  //       if(data.result)
  //       {
  //         // Afficher un truc "Success"
  //       }
  //       this.refreshList();
  //     })
  //   );
  //
  // };



}

