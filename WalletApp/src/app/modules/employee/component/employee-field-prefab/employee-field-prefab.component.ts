import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
import {indexOf, isNil} from "lodash";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {Salary} from "@shared/model/dto/salary.interface";
import {Document} from "@shared/model/dto/document.interface";
import {Timesheet} from "@shared/model/dto/timesheet.interface";
import {Contract} from "@shared/model/dto/contract.interface";

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

  boolTab: boolean[] = [true, false];


  // Variables pour la partie Company
  companyInput = new FormControl <string | Company>('', Validators.required);
  companyList: Company[] = [];
  companyFiltered?: Observable<Company[]>;
  companySelected: Company | undefined;

  // Variables pour la partie Skill

  skillInput = new FormControl <string | Skill>('');
  skillList: Skill[] = [];
  skillAssigned: Skill[] = [];
  skillAssigned$ !: Observable<Skill[]>
  skillFiltered?: Observable<Skill[]>;

  // Variables pour la partie Timesheet
  timesheetInput = new FormControl <string | Timesheet>('');
  timesheetList: Timesheet[] = [];
  timesheetAssigned: Timesheet[] = [];
  timesheetAssigned$ !: Observable<Timesheet[]>
  timesheetFiltered?: Observable<Timesheet[]>;

  // Varialbes pour la partie Document
  documentInput = new FormControl <string | Document>('');
  documentList: Document[] = [];
  documentAssigned: Document[] = [];
  documentAssigned$ !: Observable<Document[]>
  documentFiltered?: Observable<Document[]>;

  // Variables pour la partie Contract
  contractInput = new FormControl <string | Contract>('');
  contractList: Contract[] = [];
  contractAssigned: Contract[] = [];
  contractAssigned$ !: Observable<Contract[]>
  contractFiltered?: Observable<Contract[]>;


  // Variables pour la partie Fleets

  fleetInput = new FormControl <string | Fleet>('');
  fleetList: Fleet[] = [];
  fleetAssigned: Fleet[] = [];
  fleetAssigned$ !: Observable<Fleet[]>
  fleetFiltered?: Observable<Fleet[]>;

  // Variable pour la partie Salary

  salaryInput = new FormControl <string | Salary>('');
  salaryList: Salary[] = [];
  salaryAssigned: Salary[] = [];
  salaryAssigned$ !: Observable<Salary[]>
  salaryFiltered?: Observable<Salary[]>;



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



    this.timesheetService.list().subscribe(data => {
      this.timesheetList = data;

      this.timesheetFiltered = this.timesheetInput.valueChanges.pipe(
        startWith(''),
        map(value => {
          const input = typeof value === 'string' ? value : '';
          return input ? this.timesheetFilter(input) : this.timesheetList.slice();
        }),
      );
    });

    this.documentService.list().subscribe(data => {
      this.documentList = data;

      this.documentFiltered = this.documentInput.valueChanges.pipe(
        startWith(''),
        map(value => {
          const input = typeof value === 'string' ? value : '';
          return input ? this.documentFilter(input) : this.documentList.slice();
        }),
      );
    });

    this.contractService.list().subscribe(data => {
      this.contractList = data;

      this.contractFiltered = this.contractInput.valueChanges.pipe(
        startWith(''),
        map(value => {
          const input = typeof value === 'string' ? value : '';
          return input ? this.contractFilter(input) : this.contractList.slice();
        }),
      );
    });

    this.fleetService.fleetList$$.asObservable().subscribe(data => {
      this.fleetList = data;

      this.fleetFiltered = this.fleetInput.valueChanges.pipe(
        startWith(''),
        map(value => {
          const input = typeof value === 'string' ? value : '';
          return input ? this.fleetFilter(input) : this.fleetList.slice();
        }),
      );
    })

    this.fleetService.list();



    this.salaryService.list().subscribe(data => {
      this.salaryList = data;

      this.salaryFiltered = this.salaryInput.valueChanges.pipe(
        startWith(''),
        map(value => {
          const input = typeof value === 'string' ? value : '';
          return input ? this.salaryFilter(input) : this.salaryList.slice();
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
      ssin: new FormControl('', Validators.pattern('^[0-9]{2}[.\\- ]{0,1}[0-9]{2}[.\\- ]{0,1}[0-9]{2}[.\\- ]{0,1}[0-9]{3}[.\\- ]{0,1}[0-9]{2}$')),
      status: new FormControl(''),
      deleted: new FormControl(''),

      company: this.companyInput,
      skills:  this.skillInput,
      timesheets: this.timesheetInput,
      documents: this.documentInput,
      contracts: this.contractInput,
      fleets: this.fleetInput,
      salaries: this.salaryInput
    });

    this.sendFormGroup();
  }  sendFormGroup(){

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
  skillSelectedAdd(skill: Skill){

    let isDuplicated = false;
    for(let e in this.skillAssigned){
      if(this.skillAssigned[e].skillId == skill.skillId)
        isDuplicated = true;
    }

    if(!this.skillAssigned.includes(skill) && !isDuplicated)
    {
      this.skillAssigned.push(skill);
      this.skillAssigned$ = of(this.skillAssigned.slice());

      this.skillAssigned$.subscribe(data => {
        this.skillAssigned = data;
      });

      this.skillInput.setValue('');
    }

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
  deleteSkill(skill: Skill, event: any){


    if(event.pointerType === 'mouse')
    {
      this.skillAssigned$.subscribe(data => {
        this.skillAssigned = data;

        if(this.skillAssigned.length == 1)
          this.skillAssigned = [];
        else
          this.skillAssigned.splice(this.skillAssigned.indexOf(skill), 1);

        this.skillAssigned$ = of(this.skillAssigned.slice());

        this.skillAssigned$.subscribe(data => {
          this.skillAssigned = data;
        });
      });
    }
  }
  skillEvent(event: any) {
    if((event.type === 'keydown') && (event.key === 'Enter') && this.skillInput.value !== '')
    {
      if (!isNil(this.skillInput.value) && this.skillInput.value !== '' && !this.skillAssigned.includes(this.skillInput.value as Skill))
        this.skillSelectedAdd(this.skillInput.value as Skill);
      else
        this.skillInput.setValue('');
    }
  }

  // Fonctions pour le champ timesheets
  timesheetSelectedAdd(timesheet: Timesheet){
    let isDuplicated = false;
    for(let e in this.timesheetAssigned){
      if(this.timesheetAssigned[e].timesheetId == timesheet.timesheetId)
        isDuplicated = true;
    }

    if(!this.timesheetAssigned.includes(timesheet) && !isDuplicated)
    {
      this.timesheetAssigned.push(timesheet);
      this.timesheetAssigned$ = of(this.timesheetAssigned.slice());

      this.timesheetAssigned$.subscribe(data => {
        this.timesheetAssigned = data;
      });
      this.timesheetInput.setValue('');
    }
  }
  timesheetFilter(name: string): Timesheet[] {
    const filterValue = name.toLowerCase();
    return this.timesheetList.filter(timesheet =>
      (timesheet.comment + ' ' + timesheet.timesheetId).toLowerCase().includes(filterValue)
    );
  }
  timesheetDisplay(timesheet: Timesheet): string {
    return timesheet && (timesheet.comment + timesheet.timesheetId)  ?
      (timesheet.comment + ' (UUID : ' + timesheet.timesheetId + ')') : '';
  }
  deleteTimesheet(timesheet: Timesheet, event: any){

      if(event.pointerType === 'mouse')
      {
        this.timesheetAssigned$.subscribe(data => {
          this.timesheetAssigned = data;

          if(this.timesheetAssigned.length == 1)
            this.timesheetAssigned = [];
          else
            this.timesheetAssigned.splice(this.timesheetAssigned.indexOf(timesheet), 1);

          this.timesheetAssigned$ = of(this.timesheetAssigned.slice());

          this.timesheetAssigned$.subscribe(data => {
            this.timesheetAssigned = data;
          });
        });
      }
  }
  timesheetEvent(event: any) {
    if((event.type === 'keydown') && (event.key === 'Enter') && this.timesheetInput.value !== '')
    {
      if (!isNil(this.timesheetInput.value) && this.timesheetInput.value !== '' && !this.timesheetAssigned.includes(this.timesheetInput.value as Timesheet))
        this.timesheetSelectedAdd(this.timesheetInput.value as Timesheet);
      else
        this.timesheetInput.setValue('');
    }
  }

  // Fonctions pour le champ Documents
  documentSelectedAdd(document: Document){
    let isDuplicated = false;
    for(let e in this.documentAssigned){
      if(this.documentAssigned[e].documentId == document.documentId)
        isDuplicated = true;
    }

    if(!this.documentAssigned.includes(document) && !isDuplicated)
    {
      this.documentAssigned.push(document);
      this.documentAssigned$ = of(this.documentAssigned.slice());

      this.documentAssigned$.subscribe(data => {
        this.documentAssigned = data;
      });
      this.documentInput.setValue('');
    }
  }
  documentFilter(name: string): Document[] {
    const filterValue = name.toLowerCase();
    return this.documentList.filter(document =>
      (document.title + ' ' + document.documentId).toLowerCase().includes(filterValue)
    );
  }
  documentDisplay(document: Document): string {
    return document && (document.title + document.documentId)  ?
      (document.title + ' (UUID : ' + document.documentId + ')') : '';
  }
  deleteDocument(document: Document, event: any){

      if(event.pointerType === 'mouse')
      {
        this.documentAssigned$.subscribe(data => {
          this.documentAssigned = data;

          if(this.documentAssigned.length == 1)
            this.documentAssigned = [];
          else
            this.documentAssigned.splice(this.documentAssigned.indexOf(document), 1);

          this.documentAssigned$ = of(this.documentAssigned.slice());

          this.documentAssigned$.subscribe(data => {
            this.documentAssigned = data;
          });
        });
      }
  }
  documentEvent(event: any) {
    if((event.type === 'keydown') && (event.key === 'Enter') && this.documentInput.value !== '')
    {
      if (!isNil(this.documentInput.value) && this.documentInput.value !== '' && !this.documentAssigned.includes(this.documentInput.value as Document))
        this.documentSelectedAdd(this.documentInput.value as Document);
      else
        this.documentInput.setValue('');
    }
  }

  // Fonctions pour le champ Constracts
  contractSelectedAdd(contract: Contract){
    let isDuplicated = false;
    for(let e in this.contractAssigned){
      if(this.contractAssigned[e].contractId == contract.contractId)
        isDuplicated = true;
    }

    if(!this.contractAssigned.includes(contract) && !isDuplicated)
    {
      this.contractAssigned.push(contract);
      this.contractAssigned$ = of(this.contractAssigned.slice());

      this.contractAssigned$.subscribe(data => {
        this.contractAssigned = data;
      });
      this.contractInput.setValue('');
    }
  }
  contractFilter(name: string): Contract[] {
    const filterValue = name.toLowerCase();
    return this.contractList.filter(contract =>
      (contract.description + ' ' + contract.contractId).toLowerCase().includes(filterValue)
    );
  }

  contractDisplay(contract: Contract): string {
    return contract && (contract.description + contract.contractId)  ?
      (contract.description + ' (UUID : ' + contract.contractId + ')') : '';
  }
  deleteContract(contract: Contract, event: any){

        if(event.pointerType === 'mouse')
        {
          this.contractAssigned$.subscribe(data => {
            this.contractAssigned = data;

            if(this.contractAssigned.length == 1)
              this.contractAssigned = [];
            else
              this.contractAssigned.splice(this.contractAssigned.indexOf(contract), 1);

            this.contractAssigned$ = of(this.contractAssigned.slice());

            this.contractAssigned$.subscribe(data => {
              this.contractAssigned = data;
            });
          });
        }
  }
  contractEvent(event: any) {
    if((event.type === 'keydown') && (event.key === 'Enter') && this.contractInput.value !== '')
    {
      if (!isNil(this.contractInput.value) && this.contractInput.value !== '' && !this.contractAssigned.includes(this.contractInput.value as Contract))
        this.contractSelectedAdd(this.contractInput.value as Contract);
      else
        this.contractInput.setValue('');
    }
  }
  // Fonctions pour le champ fleets
  fleetSelectedAdd(fleet: Fleet){
    let isDuplicated = false;
    for(let e in this.fleetAssigned){
      if(this.fleetAssigned[e].fleetId == fleet.fleetId)
        isDuplicated = true;
    }

    if(!this.fleetAssigned.includes(fleet) && !isDuplicated)
    {
      this.fleetAssigned.push(fleet);
      this.fleetAssigned$ = of(this.fleetAssigned.slice());

      this.fleetAssigned$.subscribe(data => {
        this.fleetAssigned = data;
      });
      this.fleetInput.setValue('');
    }
  }
  fleetFilter(name: string): Fleet[] {
    const filterValue = name.toLowerCase();
    return this.fleetList.filter(fleet =>
      (fleet.title + ' ' + fleet.fleetId).toLowerCase().includes(filterValue)
    );
  }
  fleetDisplay(fleet: Fleet): string {
    return fleet && (fleet.title! + fleet.fleetId!)  ?
      (fleet.title + ' (UUID : ' + fleet.fleetId + ')') : '';
  }
  deleteFleet(skill: Skill, event: any){

    if(event.pointerType === 'mouse')
    {
      this.fleetAssigned$.subscribe(data => {
        this.fleetAssigned = data;

        if(this.fleetAssigned.length == 1)
          this.fleetAssigned = [];
        else
          this.fleetAssigned.splice(this.fleetAssigned.indexOf(skill), 1);

        this.fleetAssigned$ = of(this.fleetAssigned.slice());

        this.fleetAssigned$.subscribe(data => {
          this.fleetAssigned = data;
        });
      });
    }
  }
  fleetEvent(event: any) {
    if((event.type === 'keydown') && (event.key === 'Enter') && this.fleetInput.value !== '')
    {
      if (!isNil(this.fleetInput.value) && this.fleetInput.value !== '' && !this.fleetAssigned.includes(this.fleetInput.value as Fleet))
        this.fleetSelectedAdd(this.fleetInput.value as Fleet);
      else
        this.fleetInput.setValue('');
    }
  }

  // Fonctions pour le champ salaries

  salarySelectedAdd(salary: Salary){
    let isDuplicated = false;
    for(let e in this.salaryAssigned){
      if(this.salaryAssigned[e].salaryId == salary.salaryId)
        isDuplicated = true;
    }

    if(!this.salaryAssigned.includes(salary) && !isDuplicated)
    {
      this.salaryAssigned.push(salary);
      this.salaryAssigned$ = of(this.salaryAssigned.slice());

      this.salaryAssigned$.subscribe(data => {
        this.salaryAssigned = data;
      });
      this.salaryInput.setValue('');
    }
  }
    salaryFilter(name: string): Salary[] {
      const filterValue = name.toLowerCase();
      return this.salaryList.filter(salary =>
        (salary.title + ' ' + salary.salaryId).toLowerCase().includes(filterValue)
      );
    }
    salaryDisplay(salary: Salary): string {
      return salary && (salary.title! + salary.salaryId!)  ?
        (salary.title + ' (UUID : ' + salary.salaryId + ')') : '';
    }

  deleteSalary(salary: Salary, event: any){

      if(event.pointerType === 'mouse')
      {
        this.salaryAssigned$.subscribe(data => {
          this.salaryAssigned = data;

          if(this.salaryAssigned.length == 1)
            this.salaryAssigned = [];
          else
            this.salaryAssigned.splice(this.salaryAssigned.indexOf(salary), 1);

          this.salaryAssigned$ = of(this.salaryAssigned.slice());

          this.salaryAssigned$.subscribe(data => {
            this.salaryAssigned = data;
          });
        });
      }
  }

  salaryEvent(event: any) {
    if((event.type === 'keydown') && (event.key === 'Enter') && this.salaryInput.value !== '')
    {
      if (!isNil(this.salaryInput.value) && this.salaryInput.value !== '' && !this.salaryAssigned.includes(this.salaryInput.value as Salary))
        this.salarySelectedAdd(this.salaryInput.value as Salary);
      else
        this.salaryInput.setValue('');
    }
  }


}
