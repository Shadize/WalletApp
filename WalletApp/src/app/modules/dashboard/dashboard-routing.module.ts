import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './page';
import {HomeComponent} from "@dashboard/page/home/home.component";

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
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
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
      },
      {
        path: 'employee',
        loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule)
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
