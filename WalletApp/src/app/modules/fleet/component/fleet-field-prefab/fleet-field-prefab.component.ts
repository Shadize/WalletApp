import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "@shared/model/dto/employee.interface";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {EmployeeService} from "@shared/service/crud/employee.service";

@Component({
  selector: 'app-fleet-field-prefab',
  templateUrl: './fleet-field-prefab.component.html',
  styleUrls: ['./fleet-field-prefab.component.scss']
})
export class FleetFieldPrefabComponent {

  constructor(public employeeService : EmployeeService) {
  }

  employeeInput = new FormControl <string | Employee>('');
  employeeList: Employee[] = [];
  employeeFiltered?: Observable<Employee[]>;
  employeeSelected: Employee | undefined;
  formGroup !: FormGroup;

  @Output() myOutputEvent = new EventEmitter<FormGroup>();

  sendMessage(){
    this.myOutputEvent.emit(this.formGroup)
  }

  ngOnInit() {



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

    this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      cost: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    });

    this.sendMessage();



  }

  filter(name: string): Employee[] {
    const filterValue = name.toLowerCase();
    return this.employeeList.filter(employee =>
      (employee.firstname + ' ' + employee.lastname + ' ' + employee.employeeId).toLowerCase().includes(filterValue)
    );
  }
  display(employee: Employee): string {
    return employee && (employee.lastname + employee.firstname + employee.employeeId)  ?
      (employee.firstname + ' ' + employee.lastname + ' (UUID : ' + employee.employeeId + ')') : '';
  }

  employeeSelectedClick(employee: Employee) {
    this.employeeSelected = employee;
  }

}
