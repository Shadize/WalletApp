import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFieldPrefabComponent } from './component/employee-field-prefab/employee-field-prefab.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


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
        MatAutocompleteModule
    ]
})
export class EmployeeModule { }
