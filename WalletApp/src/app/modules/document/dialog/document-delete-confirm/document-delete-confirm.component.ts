import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DocumentService} from "@shared/service/crud/document.service";
import {Document} from "@shared/model/dto/document.interface";

@Component({
  selector: 'app-document-delete-confirm',
  templateUrl: './document-delete-confirm.component.html',
  styleUrls: ['./document-delete-confirm.component.scss']
})
export class DocumentDeleteConfirmComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {document: Document},
              private documentService: DocumentService) {
  }

  delete(){
    this.documentService.remove(this.data.document.documentId!).subscribe(response => {
      console.log(response)
    })
  }
}
