import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./page/employee/employee.component";
import {EmployeeInsertComponent} from "./page/employee-insert/employee-insert.component";
import {EmployeeEditComponent} from "./page/employee-edit/employee-edit.component";
import {HomeComponent} from "@dashboard/page/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: EmployeeComponent
  },
  {
    path: "insert",
    component: EmployeeInsertComponent
  },
  {
    path: `edit/:id`,
    component: EmployeeEditComponent

  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
