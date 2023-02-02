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
export class FleetInsertComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    console.log(this.test)

  }

  constructor(private employeeService: EmployeeService,
              private fleetService: FleetService,
              private router: Router) {
  }

  @ViewChild('test') test?: FleetFieldPrefabComponent;



  employeeInput = new FormControl <string | Employee>('');
  employeeList: Employee[] = [];
  employeeFiltered?: Observable<Employee[]>;
  employeeSelected: Employee | undefined;

  formGroup !: FormGroup;

  ngOnInit() {
    setTimeout(this.formGroup = this.test?.formGroup}, 1000)
    // this.employeeService.list().subscribe(data => {
    //   this.employeeList = data;
    //
    //   this.employeeFiltered = this.employeeInput.valueChanges.pipe(
    //     startWith(''),
    //     map(value => {
    //       const input = typeof value === 'string' ? value : '';
    //       return input ? this.filter(input) : this.employeeList.slice();
    //     }),
    //   );
    // })
    //
    // this.formGroup = new FormGroup({
    //   title: new FormControl('', Validators.required),
    //   description: new FormControl('', Validators.required),
    //   type: new FormControl('', Validators.required),
    //   cost: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    //   });



  }

  // filter(name: string): Employee[] {
  //   const filterValue = name.toLowerCase();
  //   return this.employeeList.filter(employee =>
  //     (employee.firstname + ' ' + employee.lastname + ' ' + employee.employeeId).toLowerCase().includes(filterValue)
  //   );
  // }
  //
  // display(employee: Employee): string {
  //   return employee && (employee.lastname + employee.firstname + employee.employeeId)  ?
  //     (employee.firstname + ' ' + employee.lastname + ' (UUID : ' + employee.employeeId + ')') : '';
  // }
  //
  //
  // employeeSelectedClick(employee: Employee) {
  //   this.employeeSelected = employee;
  // }
  insert(title: string, description: string, type: string, cost: string)
  {
    let payload : FleetCreatePayloadInterface = {title, description, type, cost: parseFloat(cost), employee : this.test?.employeeSelected};

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

