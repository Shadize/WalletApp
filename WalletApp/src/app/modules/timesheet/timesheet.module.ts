import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetComponent } from './page/timesheet/timesheet.component';
import {MatTableModule} from "@angular/material/table";
import { InsertTimesheetDialogComponent } from './dialog/insert-timesheet-dialog/insert-timesheet-dialog.component';
import { EditTimesheetDialogComponent } from './dialog/edit-timesheet-dialog/edit-timesheet-dialog.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    TimesheetComponent,
    InsertTimesheetDialogComponent,
    EditTimesheetDialogComponent
  ],
  imports: [
    MatSelectModule,
    CommonModule,
    TimesheetRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ]
})
export class TimesheetModule { }
