import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetRoutingModule } from './fleet-routing.module';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    CommonModule,
    FleetRoutingModule
  ]
})
export class FleetModule { }
