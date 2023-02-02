import {Component, OnInit} from '@angular/core';
import {DocumentService} from "@shared/service/crud/document.service";
import {CompanyService} from "@shared/service/crud/company.service";
import {ContractService} from "@shared/service/crud/contract.service";
import {Company} from "@shared/model/dto/company.interface";
import {Contract} from "@shared/model/dto/contract.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {DocumentCreatePayloadInterface} from "@shared/model/payload/create/DocumentCreatePayload.interface";

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent implements OnInit{


  employees: Employee[]=[];
  contracts: Contract[]=[];
  companies: Company[]=[];
  formGroup!: FormGroup;
  selectedEmployee!: Employee;
  selectedCompany!: Company;
  selectedContract!: Contract;

  constructor(private documentService: DocumentService,
              private companyService: CompanyService,
              private contractService: ContractService,
              private employeeService: EmployeeService) {
  }

  ngOnInit() {

    this.contractService.list().subscribe(data => {
      this.contracts = data;
    })
    this.companyService.list().subscribe(data => {
      this.companies = data;
    })
    this.employeeService.list().subscribe(data => {
      this.employees = data;
    })

    this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      path: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      createDate: new FormControl('', Validators.required),
      company: new FormControl(''),
      contract: new FormControl(''),
      employee: new FormControl('')
    })

  }


  insert(title: string, path: string ,content: string, type: string, date: string, company: Company, contract: Contract, employee: Employee) {

    let createDate = new Date(date);

    let newDocument: DocumentCreatePayloadInterface = { title, path ,content, type, createDate, company, contract, employee}

    let result = this.documentService.create(newDocument);
    result.subscribe(r =>{
      console.log(r)
    })
  }
}
