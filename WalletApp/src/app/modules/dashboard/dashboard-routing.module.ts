import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './page';
import {SkillsComponent} from "../skill/page/skill/skills.component";
import {HomeComponent} from "@dashboard/page/home/home.component";
import {SalaryComponent} from "../salary/page/salary/salary.component";
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
      },
      {
        path: 'fleets',
        loadChildren: () => import("../fleet/fleet.module").then(m => m.FleetModule)
      },
      {
        path: 'salary',
        component: SalaryComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
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
