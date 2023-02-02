import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FleetComponent} from "./page/fleet/fleet.component";
import * as path from "path";
import {FleetInsertComponent} from "./page/fleet-insert/fleet-insert.component";
import {FleetEditComponent} from "./page/fleet-edit/fleet-edit.component";


const routes: Routes = [
  {
    path: "",
    component: FleetComponent
  },
  {
    path: "insert",
    component: FleetInsertComponent
  },
  {
    path: `edit/:id`,
    component: FleetEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FleetRoutingModule { }
