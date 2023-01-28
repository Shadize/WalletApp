import {Component, OnInit} from '@angular/core';
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";
@Component({
  selector: 'app-fleet-insert',
  templateUrl: './fleet-insert.component.html',
  styleUrls: ['./fleet-insert.component.scss'],
  styles: ['element.style {width: 100%}']
})
export class FleetInsertComponent implements OnInit{


  constructor(private employeeService: EmployeeService) {
  }

  employeeInput = new FormControl <string | Employee>('');
  employeeList: Employee[] = [];
  employeeFiltered?: Observable<Employee[]>;



  ngOnInit() {
    this.employeeService.list().subscribe(data => {
      this.employeeList = data;
      //this.employeeFiltered = ;
    })

    // this.employeeFiltered = this.employeeInput.valueChanges.pipe(
    //   startWith(''),
    //   map(value => {
    //     // const name = typeof value === 'string' ? value : value?.lastname;
    //     const input = typeof value === 'string' ? value : '';
    //     return input ? this._filter(input as string) : this.employeeList.slice();
    //   }),
    // );

    this.employeeFiltered = this.employeeInput.valueChanges.pipe(
      startWith(''),
      map(value => {
        // const name = typeof value === 'string' ? value : value?.lastname;
        const input = typeof value === 'string' ? value : '';
        return input ? this._filter(input) : this.employeeList.slice();
      }),
    );
  }

  display(employee: Employee): string {
    console.log("Test :" +  employee, employee.lastname)
    console.log("Test 2 : " + ( employee && employee.lastname))
    return employee && employee.lastname ? employee.lastname : '';
  }

  private _filter(name: string): Employee[] {
    const filterValue = name.toLowerCase();

    return this.employeeList.filter(employee => {
      let fullName = employee.firstname + ' ' + employee.lastname;
        fullName.toLowerCase().includes(filterValue)
    });
  }


  insert(title: string, description: string, type: string, cost: string)
  {
    // let payload: FleetCreatePayloadInterface = {title, description, type, cost: parseFloat(cost)};
    // this.subList.push(
    //   this.fleetService.create(payload).subscribe(data => {
    //     if(data.result)
    //     {
    //       // Afficher un truc "Success"
    //     }
    //     this.refreshList();
    //   })
    // );

  };
}
