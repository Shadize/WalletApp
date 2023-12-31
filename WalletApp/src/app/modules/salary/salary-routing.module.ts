import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SalaryComponent} from "./page/salary/salary.component";

const routes: Routes = [
  {
    path:'',
    component: SalaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryRoutingModule { }
