import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Document} from "@shared/model/dto/document.interface";
import {DocumentService} from "@shared/service/crud/document.service";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {ContractService} from "@shared/service/crud/contract.service";
import {CompanyService} from "@shared/service/crud/company.service";

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {

  document!: Document
  dialog!: MatDialog;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {document: Document},
              private documentService: DocumentService) {  }

  ngOnInit() {
    this.document = this.data.document;
  }

}
