import {NgModule} from '@angular/core';
import {DashboardComponent} from './page';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './page/home/home.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {TimesheetModule} from "../timesheet/timesheet.module";
import {SkillModule} from "../skill/skill.module";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [DashboardRoutingModule, CommonModule, MatListModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatButtonModule, TimesheetModule, SkillModule, MatDatepickerModule, MatTableModule],
  providers: []
})
export class DashboardModule {
}
