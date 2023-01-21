import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryRoutingModule } from './salary-routing.module';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    SalaryRoutingModule
  ]
})
export class SalaryModule { }
