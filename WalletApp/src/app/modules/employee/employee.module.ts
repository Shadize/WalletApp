import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFieldPrefabComponent } from './component/employee-field-prefab/employee-field-prefab.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


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
    MatIconModule
  ]
})
export class EmployeeModule { }
