import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentDetailComponent } from './dialog/document-detail/document-detail.component';


@NgModule({
  declarations: [
    DocumentDetailComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule
  ]
})
export class DocumentModule { }
