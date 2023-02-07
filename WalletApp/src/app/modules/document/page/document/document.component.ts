import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentService} from "@shared/service/crud/document.service";
import {Document} from "@shared/model/dto/document.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SalaryCreateComponent} from "../../../salary/dialog/salary-create/salary-create.component";
import {MatDialog} from "@angular/material/dialog";
import {DocumentCreateComponent} from "../../dialog/document-create/document-create.component";
import {SalaryEditComponent} from "../../../salary/dialog/salary-edit/salary-edit.component";
import {DocumentEditComponent} from "../../dialog/document-edit/document-edit.component";
import {
  SalaryDeleteConfirmComponent
} from "../../../salary/dialog/salary-delete-confirm/salary-delete-confirm.component";
import {DocumentDeleteConfirmComponent} from "../../dialog/document-delete-confirm/document-delete-confirm.component";
import {DocumentDetailComponent} from "../../dialog/document-detail/document-detail.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy{

  documents: Document[] = [];
  displayedColumns: string[] = ['documentId', 'title', 'path', 'content', 'type','createDate', 'company','contract', 'employee', 'edit'];
  subscription: Subscription[] = [];

  constructor(private documentService: DocumentService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.subscription.push(
    this.documentService.list().subscribe(data => {
      this.documents = data
    })
    )
  }
  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }

  RefreshData(){
    this.documentService.list().subscribe(data => {
      this.documents = data
    })
  }

  openCreateDocumentDialog() {
    let dialogRef = this.dialog.open(DocumentCreateComponent)

    this.subscription.push( dialogRef.afterClosed().subscribe(result => {
      this.RefreshData();
    }))
  }

  openEditDocumentDialog(element : Document) {
    let dialogRef = this.dialog.open(DocumentEditComponent, {
      data: {document: element}
    })

    this.subscription.push( dialogRef.afterClosed().subscribe(result => {
      this.RefreshData();
    }))
  }

  openDeleteConfirmationDialog(element: Document) {
    let dialogRef = this.dialog.open(DocumentDeleteConfirmComponent, {
      data: {document: element}
    })
    this.subscription.push( dialogRef.afterClosed().subscribe(result => {
      this.RefreshData();
    }))
  }

  openDetailDialog(element: Document) {
    let dialogRef = this.dialog.open(DocumentDetailComponent, {
      data: {document: element}
    })
    this.subscription.push( dialogRef.afterClosed().subscribe(result => {
      this.RefreshData();
    }))
  }
}
