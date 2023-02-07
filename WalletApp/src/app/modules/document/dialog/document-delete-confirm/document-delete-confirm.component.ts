import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DocumentService} from "@shared/service/crud/document.service";
import {Document} from "@shared/model/dto/document.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-document-delete-confirm',
  templateUrl: './document-delete-confirm.component.html',
  styleUrls: ['./document-delete-confirm.component.scss']
})
export class DocumentDeleteConfirmComponent implements OnInit ,OnDestroy{

    subscription!: Subscription;
    document!: Document;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {document: Document},
              private documentService: DocumentService) {
  }
  
  ngOnInit(): void {
    this.document = this.data.document;
  }

  delete(){
    this.subscription=
    this.documentService.remove(this.document.documentId!).subscribe(response => {
      console.log(response)
    })
  }

  ngOnDestroy(): void {
    if(this.subscription != null)
      this.subscription.unsubscribe();
  }


}
