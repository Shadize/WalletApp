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
import {FleetComponent} from "../fleet/page/fleet/fleet.component";

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    FleetComponent
  ],
  imports: [DashboardRoutingModule, CommonModule, MatListModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatButtonModule],
  providers: []
})
export class DashboardModule {
}
