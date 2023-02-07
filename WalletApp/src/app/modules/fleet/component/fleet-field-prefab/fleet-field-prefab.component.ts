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

  /* Componenet créé pour être uitilisé dans Edit et dans Insert */

  constructor(public employeeService : EmployeeService) {
  }

  // Output pour envoyer le formGroup au parent et pouvoir intéragir dessus via le parent
  @Output() formGroupEmitter$ = new EventEmitter<FormGroup>();
  formGroup !: FormGroup;
  employeeInput = new FormControl <string | Employee>('');
  employeeList: Employee[] = [];
  employeeFiltered?: Observable<Employee[]>;
  employeeSelected: Employee | undefined;

  ngOnInit() {
    this.employeeService.list().subscribe(data => {
      this.employeeList = data;

      // Mise en place du filtre pour la recherche d'employé dans le mat-autocomplete
      this.employeeFiltered = this.employeeInput.valueChanges.pipe(
        startWith(''),
        map(value => {
          const input = typeof value === 'string' ? value : '';
          return input ? this.filter(input) : this.employeeList.slice();
        }),
      );
    })
    // Creation de Validators pour activer et désactiver le boutton insert ou update si les critères ne sont pas remplis
    this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      cost: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
      employee: this.employeeInput
    });
    this.sendFormGroup();
  }
  // Emettre la valeur du formGroup au parent
  sendFormGroup(){
    this.formGroupEmitter$.emit(this.formGroup)
  }
  employeeSelectedClick(employee: Employee) {
    this.employeeSelected = employee;
  }
  // Filter le tableau de fleets à chaque caractère tapé dans le champ de recherche
  filter(name: string): Employee[] {
    const filterValue = name.toLowerCase();
    return this.employeeList.filter(employee =>
      (employee.firstname + ' ' + employee.lastname + ' ' + employee.employeeId).toLowerCase().includes(filterValue)
    );
  }

  // La manière dont on affiche les données dans l'input
  display(employee: Employee): string {
    return employee && (employee.lastname + employee.firstname + employee.employeeId)  ?
      (employee.firstname + ' ' + employee.lastname + ' (UUID : ' + employee.employeeId + ')') : '';
  }

}
