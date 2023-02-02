import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-fleet-edit',
  templateUrl: './fleet-edit.component.html',
  styleUrls: ['./fleet-edit.component.scss']
})
export class FleetEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private fleetService : FleetService,
              private employeeService : EmployeeService) { }

  fleetId : string = '';
  fleet !: Fleet;
  formGroup!: FormGroup;
  employeeInput = new FormControl <string | Employee>('');
  employeeList: Employee[] = []
  employeeFiltered?: Observable<Employee[]>;
  employeeSelected: Employee | undefined;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      fleetId: new FormControl(''),
      title: new FormControl('',Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      cost: new FormControl('',[Validators.required, Validators.pattern("^[0-9]$")])
    })

    this.fleetId = this.route.snapshot.paramMap.get('id') || '';

    this.fleetService.detail(this.fleetId).subscribe(data => {
      this.fleet = data.data as Fleet;

      this.formGroup.setValue({
        fleetId : this.fleetId,
        title: this.fleet.title,
        description: this.fleet.description,
        type: this.fleet.type,
        cost: this.fleet.cost
      })
    })

    this.employeeService.list().subscribe(data => {
      this.employeeList = data;

      this.employeeFiltered = this.employeeInput.valueChanges.pipe(
        startWith(''),
        map(value => {
          const input = typeof value === 'string' ? value : '';
          return input ? this.filter(input) : this.employeeList.slice();
        }),
      );
    })

  }

  employeeSelectedClick(employee: Employee) {
    this.employeeSelected = employee;
  }

  display(employee: Employee): string {
    return employee && (employee.lastname + employee.firstname + employee.employeeId)  ?
      (employee.firstname + ' ' + employee.lastname + ' (UUID : ' + employee.employeeId + ')') : '';
  }

  filter(name: string): Employee[] {
    const filterValue = name.toLowerCase();
    return this.employeeList.filter(employee =>
      (employee.firstname + ' ' + employee.lastname + ' ' + employee.employeeId).toLowerCase().includes(filterValue)
    );
  }

  update(){

  }

}
