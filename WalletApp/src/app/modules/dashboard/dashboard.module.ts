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
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [DashboardRoutingModule, CommonModule, MatListModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatDialogModule, MatMenuModule, MatTooltipModule, TranslateModule],
  providers: []
})
export class DashboardModule {
}
