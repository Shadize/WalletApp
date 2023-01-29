import {Component, Inject, OnInit} from '@angular/core';
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
@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.scss']
})
export class DocumentEditComponent implements OnInit{

  formGroup!: FormGroup;
  editDocument!: Document;
  companies: Company[] = [];
  contracts: Contract[] = [];
  employees: Employee[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {document: Document},
              private documentService: DocumentService,
              private employeeService: EmployeeService,
              private contractService: ContractService,
              private companyService: CompanyService) {
  }

  ngOnInit() {

    this.editDocument = this.data.document;

    this.companyService.list().subscribe(data =>{
      this.companies = data;
    })
    this.contractService.list().subscribe(data =>{
      this.contracts = data;
    })
    this.employeeService.list().subscribe(data =>{
      this.employees = data;
    })

    this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      path: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      createDate: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      contract: new FormControl('', Validators.required),
      employee: new FormControl('', Validators.required),
    })
  }

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
      console.log(response)
    })
  }
}
