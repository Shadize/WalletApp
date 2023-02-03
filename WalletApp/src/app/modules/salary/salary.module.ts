import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryRoutingModule } from './salary-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SalaryCreateComponent } from './dialog/salary-create/salary-create.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { SalaryDeleteConfirmComponent } from './dialog/salary-delete-confirm/salary-delete-confirm.component';
import { SalaryEditComponent } from './dialog/salary-edit/salary-edit.component';
import {MatDialogModule} from "@angular/material/dialog";
import { SalaryDetailComponent } from './dialog/salary-detail/salary-detail.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [

    SalaryDetailComponent
  ],
    imports: [
        FormsModule,
        CommonModule,
        SalaryRoutingModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatIconModule
    ]
})
export class SalaryModule { }
