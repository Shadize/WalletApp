import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFieldPrefabComponent } from './component/employee-field-prefab/employee-field-prefab.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FleetRoutingModule} from "../fleet/fleet-routing.module";
import {EmployeeComponent} from "./page/employee/employee.component";
import {EmployeeEditComponent} from "./page/employee-edit/employee-edit.component";
import {EmployeeInsertComponent} from "./page/employee-insert/employee-insert.component";
import {EmployeeDetailComponent} from "./page/employee-detail/employee-detail.component";
import {SharedModule} from "@shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
    declarations: [
        EmployeeFieldPrefabComponent,
        EmployeeComponent,
        EmployeeEditComponent,
        EmployeeInsertComponent,
        EmployeeDetailComponent
    ],
  imports: [
    FormsModule,
    CommonModule,
    EmployeeRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatPaginatorModule

  ]
})
export class EmployeeModule { }
