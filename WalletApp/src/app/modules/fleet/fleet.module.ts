import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetRoutingModule } from './fleet-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FleetInsertComponent } from './page/fleet-insert/fleet-insert.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    FleetInsertComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FleetRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ]
})
export class FleetModule { }
