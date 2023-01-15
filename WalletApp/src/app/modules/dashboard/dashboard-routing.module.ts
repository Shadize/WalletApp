import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './page';
import {SkillsComponent} from "../skill/page/skill/skills.component";
import {HomeComponent} from "@dashboard/page/home/home.component";
import {SalaryComponent} from "../salary/page/salary/salary.component";


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
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'salary',
        component: SalaryComponent
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
