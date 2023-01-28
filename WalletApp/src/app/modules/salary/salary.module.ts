import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryRoutingModule } from './salary-routing.module';
import {FormsModule} from "@angular/forms";
import { SalaryCreateComponent } from './salary-create/salary-create.component';


@NgModule({
  declarations: [
    SalaryCreateComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SalaryRoutingModule
  ]
})
export class SalaryModule { }
