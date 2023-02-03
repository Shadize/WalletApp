import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './page';
import {SkillsComponent} from "../skill/page/skill/skills.component";
import {HomeComponent} from "@dashboard/page/home/home.component";

import {TimesheetModule} from "../timesheet/timesheet.module";
import {FleetComponent} from "../fleet/page/fleet/fleet.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      } ,
      {
        path: 'skill',
        loadChildren: () => import('../skill/skill.module').then(m => m.SkillModule),
      },
      {
        path: 'fleet',
        loadChildren: () => import("../fleet/fleet.module").then(m => m.FleetModule)
      },
      {
        path: 'salary',
        loadChildren: () => import('../salary/salary.module').then(m => m.SalaryModule)
      },
      {
        path: 'document',
        loadChildren: () => import('../document/document.module').then(m => m.DocumentModule)
      },
      {
        path: 'timesheet',
        loadChildren: () => import('../timesheet/timesheet.module').then(m => m.TimesheetModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
