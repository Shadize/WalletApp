import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryRoutingModule } from './salary-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SalaryCreateComponent } from './salary-create/salary-create.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { SalaryDeleteConfirmComponent } from './salary-delete-confirm/salary-delete-confirm.component';


@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    CommonModule,
    SalaryRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ]
})
export class SalaryModule { }
