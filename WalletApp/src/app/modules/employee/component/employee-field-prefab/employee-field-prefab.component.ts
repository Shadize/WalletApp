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
              private salaryService: SalaryService) {
  }

  // On prévoit un emitter pour transmettre le formGroup au parent
  @Output() formGroupEmitter$ = new EventEmitter<FormGroup>();
  formGroup !: FormGroup;

  // Variables pour la partie Company
  companyInput = new FormControl<string | Company>('', Validators.required);
  companyList: Company[] = [];
  companyFiltered?: Observable<Company[]>;
  companySelected: Company | undefined;

  // Variables pour la partie Skill

  skillInput = new FormControl<string | Skill>('');
  skillList: Skill[] = [];
  skillAssigned: Skill[] = [];
  skillAssigned$ !: Observable<Skill[]>
  skillFiltered?: Observable<Skill[]>;

  // Variables pour la partie Timesheet
  timesheetInput = new FormControl<string | Timesheet>('');
  timesheetList: Timesheet[] = [];
  timesheetAssigned: Timesheet[] = [];
  timesheetAssigned$ !: Observable<Timesheet[]>
  timesheetFiltered?: Observable<Timesheet[]>;

  // Varialbes pour la partie Document
  documentInput = new FormControl<string | Document>('');
  documentList: Document[] = [];
  documentAssigned: Document[] = [];
  documentAssigned$ !: Observable<Document[]>
  documentFiltered?: Observable<Document[]>;

  // Variables pour la partie Contract
  contractInput = new FormControl<string | Contract>('');
  contractList: Contract[] = [];
  contractAssigned: Contract[] = [];
  contractAssigned$ !: Observable<Contract[]>
  contractFiltered?: Observable<Contract[]>;


  // Variables pour la partie Fleets

  fleetInput = new FormControl<string | Fleet>('');
  fleetList: Fleet[] = [];
  fleetAssigned: Fleet[] = [];
  fleetAssigned$ !: Observable<Fleet[]>
  fleetFiltered?: Observable<Fleet[]>;

  // Variable pour la partie Salary

  salaryInput = new FormControl<string | Salary>('');
  salaryList: Salary[] = [];
  salaryAssigned: Salary[] = [];
  salaryAssigned$ !: Observable<Salary[]>
  salaryFiltered?: Observable<Salary[]>;


  ngOnInit() {

    // Chargement de la List Company et mise en place du filtre document pour l'autocomplete
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

    // Chargement de la List Skill et mise en place du filtre skill pour l'autocomplete
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

    // Chargement de la List Timesheet et mise en place du filtre timesheet pour l'autocomplete
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

    // Chargement de la List Document et mise en place du filtre document pour l'autocomplete
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

    // Chargement de la List Contract et mise en place du filtre contract pour l'autocomplete
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

    // on observe le Subject List Fleet et on met en place du filtre fleet pour l'autocomplete
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
    // On charge la liste des Fleet
    this.fleetService.list();


    // Chargement de la List Salary et mise en place du filtre salary
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
      skills: this.skillInput,
      timesheets: this.timesheetInput,
      documents: this.documentInput,
      contracts: this.contractInput,
      fleets: this.fleetInput,
      salaries: this.salaryInput
    });
    this.sendFormGroup();
  }

  // Fonction pour envoyer le formGroup au parent
  sendFormGroup() {
    this.formGroupEmitter$.emit(this.formGroup)
  }


  // Fonctions pour le champ company
  companySelectedClick(company: Company) {
    this.companySelected = company;
  }

  // On filtre la liste des companies en fonction de la saisie
  companyFilter(name: string): Company[] {
    const filterValue = name.toLowerCase();
    return this.companyList.filter(company =>
      (company.name + ' ' + company.companyId).toLowerCase().includes(filterValue)
    );
  }

  // Format d'affichage le nom de la company et son UUID
  companyDisplay(company: Company): string {
    return company && (company.name + company.companyId) ?
      (company.name + ' (UUID : ' + company.companyId + ')') : '';
  }


  /* A partir d'ici, tous les autres champ auront 5 fonctions assignées*/


  // Fonctions pour le champ skills
  // On ajoute un skill dans la list et on vérifie qu'il n'y a pas de doublon et on refresh le tableau
  skillSelectedAdd(skill: Skill) {
    let isDuplicated = false;
    for (let e in this.skillAssigned) {
      if (this.skillAssigned[e].skillId == skill.skillId)
        isDuplicated = true;
    }
    if (!this.skillAssigned.includes(skill) && !isDuplicated) {
      this.skillAssigned.push(skill);
      this.skillAssigned$ = of(this.skillAssigned.slice());

      this.skillAssigned$.subscribe(data => {
        this.skillAssigned = data;
      });
      this.skillInput.setValue('');
    }
  }

  // On filtre la liste des skills en fonction de la saisie
  skillFilter(name: string): Skill[] {
    const filterValue = name.toLowerCase();
    return this.skillList.filter(skill =>
      (skill.title + ' ' + skill.skillId).toLowerCase().includes(filterValue)
    );
  }

  // Format d'affichage le nom du skill et son UUID
  skillDisplay(skill: Skill): string {
    return skill && (skill.title + skill.skillId) ?
      (skill.title + ' (UUID : ' + skill.skillId + ')') : '';
  }

  // On supprime un skill de la liste et on refresh le tableau
  deleteSkill(skill: Skill, event: any) {
    if (event.pointerType === 'mouse') {
      this.skillAssigned$.subscribe(data => {
        this.skillAssigned = data;

        if (this.skillAssigned.length == 1)
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

  // Fonciton pour ajouter un skill avec la touche entrée
  skillEvent(event: any) {
    if ((event.type === 'keydown') && (event.key === 'Enter') && this.skillInput.value !== '') {
      if (!isNil(this.skillInput.value) && this.skillInput.value !== '' && !this.skillAssigned.includes(this.skillInput.value as Skill))
        this.skillSelectedAdd(this.skillInput.value as Skill);
      else
        this.skillInput.setValue('');
    }
  }


  // Fonctions pour le champ timesheets
  // On ajoute un timesheet dans la list et on vérifie qu'il n'y a pas de doublon et on refresh le tableau
  timesheetSelectedAdd(timesheet: Timesheet) {
    let isDuplicated = false;
    for (let e in this.timesheetAssigned) {
      if (this.timesheetAssigned[e].timesheetId == timesheet.timesheetId)
        isDuplicated = true;
    }
    if (!this.timesheetAssigned.includes(timesheet) && !isDuplicated) {
      this.timesheetAssigned.push(timesheet);
      this.timesheetAssigned$ = of(this.timesheetAssigned.slice());

      this.timesheetAssigned$.subscribe(data => {
        this.timesheetAssigned = data;
      });
      this.timesheetInput.setValue('');
    }
  }

  // On filtre la liste des timesheets en fonction de la saisie
  timesheetFilter(name: string): Timesheet[] {
    const filterValue = name.toLowerCase();
    return this.timesheetList.filter(timesheet =>
      (timesheet.comment + ' ' + timesheet.timesheetId).toLowerCase().includes(filterValue)
    );
  }

  // Format d'affichage le nom du timesheet et son UUID
  timesheetDisplay(timesheet: Timesheet): string {
    return timesheet && (timesheet.comment + timesheet.timesheetId) ?
      (timesheet.comment + ' (UUID : ' + timesheet.timesheetId + ')') : '';
  }

  // On supprime un timesheet de la liste et on refresh le tableau
  deleteTimesheet(timesheet: Timesheet, event: any) {
    if (event.pointerType === 'mouse') {
      this.timesheetAssigned$.subscribe(data => {
        this.timesheetAssigned = data;

        if (this.timesheetAssigned.length == 1)
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

  // Fonciton pour ajouter un timesheet avec la touche entrée
  timesheetEvent(event: any) {
    if ((event.type === 'keydown') && (event.key === 'Enter') && this.timesheetInput.value !== '') {
      if (!isNil(this.timesheetInput.value) && this.timesheetInput.value !== '' && !this.timesheetAssigned.includes(this.timesheetInput.value as Timesheet))
        this.timesheetSelectedAdd(this.timesheetInput.value as Timesheet);
      else
        this.timesheetInput.setValue('');
    }
  }

  // Fonctions pour le champ Documents
  // On ajoute un document dans la list et on vérifie qu'il n'y a pas de doublon et on refresh le tableau
  documentSelectedAdd(document: Document) {
    let isDuplicated = false;
    for (let e in this.documentAssigned) {
      if (this.documentAssigned[e].documentId == document.documentId)
        isDuplicated = true;
    }

    if (!this.documentAssigned.includes(document) && !isDuplicated) {
      this.documentAssigned.push(document);
      this.documentAssigned$ = of(this.documentAssigned.slice());

      this.documentAssigned$.subscribe(data => {
        this.documentAssigned = data;
      });
      this.documentInput.setValue('');
    }
  }

  // On filtre la liste des documents en fonction de la saisie
  documentFilter(name: string): Document[] {
    const filterValue = name.toLowerCase();
    return this.documentList.filter(document =>
      (document.title + ' ' + document.documentId).toLowerCase().includes(filterValue)
    );
  }

  // Format d'affichage le nom du document et son UUID
  documentDisplay(document: Document): string {
    return document && (document.title + document.documentId) ?
      (document.title + ' (UUID : ' + document.documentId + ')') : '';
  }

  // On supprime un document de la liste et on refresh le tableau
  deleteDocument(document: Document, event: any) {

    if (event.pointerType === 'mouse') {
      this.documentAssigned$.subscribe(data => {
        this.documentAssigned = data;

        if (this.documentAssigned.length == 1)
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

  // Fonciton pour ajouter un document avec la touche entrée
  documentEvent(event: any) {
    if ((event.type === 'keydown') && (event.key === 'Enter') && this.documentInput.value !== '') {
      if (!isNil(this.documentInput.value) && this.documentInput.value !== '' && !this.documentAssigned.includes(this.documentInput.value as Document))
        this.documentSelectedAdd(this.documentInput.value as Document);
      else
        this.documentInput.setValue('');
    }
  }

  // Fonctions pour le champ Constracts
  // On ajoute un contract dans la list et on vérifie qu'il n'y a pas de doublon et on refresh le tableau
  contractSelectedAdd(contract: Contract) {
    let isDuplicated = false;
    for (let e in this.contractAssigned) {
      if (this.contractAssigned[e].contractId == contract.contractId)
        isDuplicated = true;
    }

    if (!this.contractAssigned.includes(contract) && !isDuplicated) {
      this.contractAssigned.push(contract);
      this.contractAssigned$ = of(this.contractAssigned.slice());

      this.contractAssigned$.subscribe(data => {
        this.contractAssigned = data;
      });
      this.contractInput.setValue('');
    }
  }

  // On filtre la liste des contracts en fonction de la saisie
  contractFilter(name: string): Contract[] {
    const filterValue = name.toLowerCase();
    return this.contractList.filter(contract =>
      (contract.description + ' ' + contract.contractId).toLowerCase().includes(filterValue)
    );
  }

  // Format d'affichage le nom du contract et son UUID
  contractDisplay(contract: Contract): string {
    return contract && (contract.description + contract.contractId) ?
      (contract.description + ' (UUID : ' + contract.contractId + ')') : '';
  }

  // On supprime un contract de la liste et on refresh le tableau
  deleteContract(contract: Contract, event: any) {

    if (event.pointerType === 'mouse') {
      this.contractAssigned$.subscribe(data => {
        this.contractAssigned = data;

        if (this.contractAssigned.length == 1)
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

  // Fonciton pour ajouter un contract avec la touche entrée
  contractEvent(event: any) {
    if ((event.type === 'keydown') && (event.key === 'Enter') && this.contractInput.value !== '') {
      if (!isNil(this.contractInput.value) && this.contractInput.value !== '' && !this.contractAssigned.includes(this.contractInput.value as Contract))
        this.contractSelectedAdd(this.contractInput.value as Contract);
      else
        this.contractInput.setValue('');
    }
  }

  // Fonctions pour le champ fleets
  // On ajoute un fleet dans la list et on vérifie qu'il n'y a pas de doublon et on refresh le tableau
  fleetSelectedAdd(fleet: Fleet) {
    let isDuplicated = false;
    for (let e in this.fleetAssigned) {
      if (this.fleetAssigned[e].fleetId == fleet.fleetId)
        isDuplicated = true;
    }
    if (!this.fleetAssigned.includes(fleet) && !isDuplicated) {
      this.fleetAssigned.push(fleet);
      this.fleetAssigned$ = of(this.fleetAssigned.slice());

      this.fleetAssigned$.subscribe(data => {
        this.fleetAssigned = data;
      });
      this.fleetInput.setValue('');
    }
  }

  // On filtre la liste des fleets en fonction de la saisie
  fleetFilter(name: string): Fleet[] {
    const filterValue = name.toLowerCase();
    return this.fleetList.filter(fleet =>
      (fleet.title + ' ' + fleet.fleetId).toLowerCase().includes(filterValue)
    );
  }

  // Format d'affichage le nom du fleet et son UUID
  fleetDisplay(fleet: Fleet): string {
    return fleet && (fleet.title! + fleet.fleetId!) ?
      (fleet.title + ' (UUID : ' + fleet.fleetId + ')') : '';
  }

  // On supprime un fleet de la liste et on refresh le tableau
  deleteFleet(skill: Skill, event: any) {

    if (event.pointerType === 'mouse') {
      this.fleetAssigned$.subscribe(data => {
        this.fleetAssigned = data;

        if (this.fleetAssigned.length == 1)
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

  // Fonciton pour ajouter un fleet avec la touche entrée
  fleetEvent(event: any) {
    if ((event.type === 'keydown') && (event.key === 'Enter') && this.fleetInput.value !== '') {
      if (!isNil(this.fleetInput.value) && this.fleetInput.value !== '' && !this.fleetAssigned.includes(this.fleetInput.value as Fleet))
        this.fleetSelectedAdd(this.fleetInput.value as Fleet);
      else
        this.fleetInput.setValue('');
    }
  }

  // Fonctions pour le champ salaries
  // On ajoute un salary dans la list et on vérifie qu'il n'y a pas de doublon et on refresh le tableau
  salarySelectedAdd(salary: Salary) {
    let isDuplicated = false;
    for (let e in this.salaryAssigned) {
      if (this.salaryAssigned[e].salaryId == salary.salaryId)
        isDuplicated = true;
    }
    if (!this.salaryAssigned.includes(salary) && !isDuplicated) {
      this.salaryAssigned.push(salary);
      this.salaryAssigned$ = of(this.salaryAssigned.slice());

      this.salaryAssigned$.subscribe(data => {
        this.salaryAssigned = data;
      });
      this.salaryInput.setValue('');
    }
  }

  // On filtre la liste des salaries en fonction de la saisie
  salaryFilter(name: string): Salary[] {
    const filterValue = name.toLowerCase();
    return this.salaryList.filter(salary =>
      (salary.title + ' ' + salary.salaryId).toLowerCase().includes(filterValue)
    );
  }

  // Format d'affichage le nom du salary et son UUID
  salaryDisplay(salary: Salary): string {
    return salary && (salary.title! + salary.salaryId!) ?
      (salary.title + ' (UUID : ' + salary.salaryId + ')') : '';
  }

  // On supprime un salary de la liste et on refresh le tableau
  deleteSalary(salary: Salary, event: any) {

    if (event.pointerType === 'mouse') {
      this.salaryAssigned$.subscribe(data => {
        this.salaryAssigned = data;

        if (this.salaryAssigned.length == 1)
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

  // Fonciton pour ajouter un salary avec la touche entrée
  salaryEvent(event: any) {
    if ((event.type === 'keydown') && (event.key === 'Enter') && this.salaryInput.value !== '') {
      if (!isNil(this.salaryInput.value) && this.salaryInput.value !== '' && !this.salaryAssigned.includes(this.salaryInput.value as Salary))
        this.salarySelectedAdd(this.salaryInput.value as Salary);
      else
        this.salaryInput.setValue('');
    }
  }


}
