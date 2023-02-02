import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetRoutingModule } from './fleet-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FleetInsertComponent } from './page/fleet-insert/fleet-insert.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatTableModule} from "@angular/material/table";
import { FleetDetailComponent } from './page/fleet-detail/fleet-detail.component';
import {MatIconModule} from "@angular/material/icon";
import { FleetEditComponent } from './page/fleet-edit/fleet-edit.component';
import { FleetFieldPrefabComponent } from './component/fleet-field-prefab/fleet-field-prefab.component';

@NgModule({
  declarations: [
    FleetInsertComponent,
    FleetDetailComponent,
    FleetEditComponent,
    FleetFieldPrefabComponent
  ],
    imports: [
        FormsModule,
        CommonModule,
        FleetRoutingModule,
        MatInputModule,
        MatButtonModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatTableModule,
        MatIconModule
    ]
})
export class FleetModule { }
