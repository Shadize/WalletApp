import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Document} from "@shared/model/dto/document.interface";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DocumentService} from "@shared/service/crud/document.service";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {ContractService} from "@shared/service/crud/contract.service";
import {CompanyService} from "@shared/service/crud/company.service";
import {Company} from "@shared/model/dto/company.interface";
import {Contract} from "@shared/model/dto/contract.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {DocumentUpdatePayloadInterface} from "@shared/model/payload/update/DocumentUpdatePayload.interface";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.scss']
})
export class DocumentEditComponent implements OnInit, OnDestroy{

  formGroup!: FormGroup;
  editDocument!: Document;
  companies: Company[] = [];
  contracts: Contract[] = [];
  employees: Employee[] = [];
  title!: string;
  subscription: Subscription[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {document: Document},
              private documentService: DocumentService,
              private employeeService: EmployeeService,
              private contractService: ContractService,
              private companyService: CompanyService) {
  }

  ngOnInit() {

    // Récupération de la liste des emloyee, company et contract pour
    // La sélection lors de l'édition

    this.editDocument = this.data.document;
    this.title = this.editDocument.title

    this.subscription.push(
    this.companyService.list().subscribe(data =>{
      this.companies = data;
    }),
    this.contractService.list().subscribe(data =>{
      this.contracts = data;
    }),
    this.employeeService.list().subscribe(data =>{
      this.employees = data;
    })
  )
    // Pas de validator pour company, contract et employee car ils ne sont pas obligatoire
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

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }

  // Création d'un payload pour l'update
  edit() {
    let updatedDocument: DocumentUpdatePayloadInterface = {
      documentId: this.editDocument.documentId,
      title: this.editDocument.title,
      path: this.editDocument.path,
      content: this.editDocument.content,
      type: this.editDocument.type,
      createDate: this.editDocument.createDate,
      company: this.editDocument.company,
      contract: this.editDocument.contract,
      employee: this.editDocument.employee
    }
    this.documentService.update(updatedDocument).subscribe(response => {

    })
  }
}
