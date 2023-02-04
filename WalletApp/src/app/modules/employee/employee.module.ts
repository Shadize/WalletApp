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


@NgModule({
    declarations: [
        EmployeeFieldPrefabComponent
    ],
    exports: [
        EmployeeFieldPrefabComponent
    ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        MatInputModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule

    ]
})
export class EmployeeModule { }
