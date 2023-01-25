import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FleetComponent} from "./page/fleet/fleet.component";
import * as path from "path";
import {FleetInsertComponent} from "./page/fleet-insert/fleet-insert.component";


// const routes: Routes = [
//   {
//     path:'',
//     children: [
//       {
//         path:'',
//         component: FleetComponent
//       },
//       {
//         path:'insert',
//         component: FleetInsertComponent
//       }
//     ]
//   }
// ];

const routes: Routes = [
  {
    path: "",
    component: FleetComponent
  },
  {
    path: "insert",
    component: FleetInsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FleetRoutingModule { }
