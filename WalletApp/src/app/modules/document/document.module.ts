import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentDetailComponent } from './dialog/document-detail/document-detail.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    DocumentDetailComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule
  ]
})
export class DocumentModule { }
