import {Component, EventEmitter, Output} from '@angular/core';
import {EmployeeService} from "@shared/service/crud/employee.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "@shared/model/dto/employee.interface";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-employee-field-prefab',
  templateUrl: './employee-field-prefab.component.html',
  styleUrls: ['./employee-field-prefab.component.scss']
})
export class EmployeeFieldPrefabComponent {
  constructor(public employeeService : EmployeeService) {
  }

  @Output() formGroupEmitter$ = new EventEmitter<FormGroup>();
  formGroup !: FormGroup;

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
          return input ? this.filter(input) : this.employeeList.slice();
        }),
      );
    })

    this.formGroup = new FormGroup({
      lastname: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      active: new FormControl(''),
      deletedBy: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      birthday: new FormControl(''),
      ssin: new FormControl(''),
      status: new FormControl(''),
      deleted: new FormControl(''),

      company: new FormControl('', [Validators.required,Validators.pattern("^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$")]),
      skills: new FormControl(''),
      timesheets: new FormControl(''),
      documents: new FormControl(''),
      contracts: new FormControl(''),
      fleets: new FormControl(''),
      salaries: new FormControl('')
    });
    this.sendFormGroup();
  }
  sendFormGroup(){
    this.formGroupEmitter$.emit(this.formGroup)
  }
  employeeSelectedClick(employee: Employee) {
    this.employeeSelected = employee;
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
}
