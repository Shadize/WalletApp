import {Component, OnInit} from '@angular/core';
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {FleetCreatePayloadInterface} from "@shared/model/payload/create/FleetCreatePayload.interface";
import {FleetService} from "@shared/service/crud/fleet.service";
import {Router} from "@angular/router";
import {isNil} from "lodash";
import {MatOption} from "@angular/material/core";
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

  employeeInput = new FormControl <string | Employee>('');
  employeeList: Employee[] = [];
  employeeFiltered?: Observable<Employee[]>;

  employeeSelected: Employee | undefined;

  ngOnInit() {
    this.employeeService.list().subscribe(data => {
      this.employeeList = data;

      this.employeeFiltered = this.employeeInput.valueChanges.pipe(
        startWith(''),
        map(value => {
          const input = typeof value === 'string' ? value : '';
          return input ? this._filter(input) : this.employeeList.slice();
        }),
      );
    })

  }

  private _filter(name: string): Employee[] {
    const filterValue = name.toLowerCase();
    return this.employeeList.filter(employee =>
      (employee.firstname + ' ' + employee.lastname + ' ' + employee.employeeId).toLowerCase().includes(filterValue)
    );
  }

  display(employee: Employee): string {
    return employee && (employee.lastname + employee.firstname + employee.employeeId)  ?
      (employee.firstname + ' ' + employee.lastname + ' (UUID : ' + employee.employeeId + ')') : '';



  }

  test(){
    console.log("Test : " + this.employeeInput);
  }

  // selectedEmployee(option: MatOption) {
  //   this.employeeSelected = option.value;
  //   console.log("ixi : " + option.value)
  // }

  selectedEmployee(employee: Employee) {
    //this.employeeSelected = e;
    this.employeeSelected = employee;
    console.log("ixi : " + this.employeeSelected)
    console.log("ixi : " + JSON.stringify(this.employeeSelected))
  }


  insert(title: string, description: string, type: string, cost: string, employee: FormControl)
  {


    let payload : FleetCreatePayloadInterface = {title, description, type, cost: parseFloat(cost), employee : this.employeeSelected};
    console.log("vroom :" + this.employeeSelected);

    this.fleetService.create(payload).subscribe(data => {
      console.log(data);
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

