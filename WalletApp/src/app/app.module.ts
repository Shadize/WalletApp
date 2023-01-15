import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from '@shared/service/http.interceptor';
import {AuthService} from '@security/service/auth.service';
import { SkillsComponent } from './modules/skill/page/skill/skills.component';

//Material
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {CdkTableModule} from "@angular/cdk/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {SharedModule} from "@shared/shared.module";
import {MatMenuModule} from "@angular/material/menu";
import { SalaryComponent } from './modules/salary/page/salary/salary.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {FleetComponent} from "./modules/fleet/page/fleet/fleet.component";



@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    FleetComponent,
    SalaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    //Material
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    CdkTableModule,
    MatTooltipModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    SharedModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
  },
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
