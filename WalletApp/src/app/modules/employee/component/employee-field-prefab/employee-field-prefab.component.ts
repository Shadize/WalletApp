import {ChangeDetectorRef, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {EmployeeService} from "@shared/service/crud/employee.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "@shared/model/dto/employee.interface";
import {Observable, of, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {Company} from "@shared/model/dto/company.interface";
import {CompanyService} from "@shared/service/crud/company.service";
import {SkillService} from "@shared/service/crud/skill.service";
import {TimesheetService} from "@shared/service/crud/timesheet.service";
import {DocumentService} from "@shared/service/crud/document.service";
import {ContractService} from "@shared/service/crud/contract.service";
import {FleetService} from "@shared/service/crud/fleet.service";
import {SalaryService} from "@shared/service/crud/salary.service";
import {Skill} from "@shared/model/dto/skill.interface";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-employee-field-prefab',
  templateUrl: './employee-field-prefab.component.html',
  styleUrls: ['./employee-field-prefab.component.scss']
})
export class EmployeeFieldPrefabComponent {
  constructor(private companyService: CompanyService,
              private skillService: SkillService,
              private timesheetService: TimesheetService,
              private documentService: DocumentService,
              private contractService: ContractService,
              private fleetService: FleetService,
              private salaryService: SalaryService) {}


  @Output() formGroupEmitter$ = new EventEmitter<FormGroup>();
  formGroup !: FormGroup;


  companyInput = new FormControl <string | Company>('');
  companyList: Company[] = [];
  companyFiltered?: Observable<Company[]>;
  companySelected: Company | undefined;

  skillInput = new FormControl <string | Skill>('');
  skillList: Skill[] = [];
  skillAssigned: Skill[] = [];
  skillFiltered?: Observable<Skill[]>;
  skillSelected: Skill | undefined;

  test!: Observable<Skill[]>;




  ngOnInit() {

    this.companyService.list().subscribe(data => {
      this.companyList = data;

      this.companyFiltered = this.companyInput.valueChanges.pipe(
        startWith(''),
        map(value => {
          const input = typeof value === 'string' ? value : '';
          return input ? this.companyFilter(input) : this.companyList.slice();
        }),
      );
    })

    this.skillService.list().subscribe(data => {
      this.skillList = data;

      this.skillFiltered = this.skillInput.valueChanges.pipe(
        startWith(''),
        map(value => {
          const input = typeof value === 'string' ? value : '';
          return input ? this.skillFilter(input) : this.skillList.slice();
        }),
      );

    });



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

      company: new FormControl('', Validators.required),
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

  // Fonctions pour le champ company
  companySelectedClick(company: Company){
    this.companySelected = company;
  }
  companyFilter(name: string): Company[] {
    const filterValue = name.toLowerCase();
    return this.companyList.filter(company =>
      (company.name + ' ' + company.companyId).toLowerCase().includes(filterValue)
    );
  }
  companyDisplay(company: Company): string {
    return company && (company.name + company.companyId)  ?
      (company.name + ' (UUID : ' + company.companyId + ')') : '';
  }

  // Fonctions pour le champ skills
  skillSelectedClick(skill: Skill){
    this.skillAssigned.push(skill);

    of(this.skillAssigned.slice()).subscribe(data => {
      this.skillAssigned = data;
    });
  }
  skillFilter(name: string): Skill[] {
    const filterValue = name.toLowerCase();
    return this.skillList.filter(skill =>
      (skill.title + ' ' + skill.skillId).toLowerCase().includes(filterValue)
    );
  }
  skillDisplay(skill: Skill): string {
    return skill && (skill.title + skill.skillId)  ?
      (skill.title + ' (UUID : ' + skill.skillId + ')') : '';
  }
  deleteSkill(skill: Skill){
    this.skillAssigned = this.skillAssigned.splice(this.skillAssigned.indexOf(skill), 1);
  }


}
