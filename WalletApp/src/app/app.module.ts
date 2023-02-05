import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from '@shared/service/http.interceptor';
import {AuthService} from '@security/service/auth.service';
import {SkillsComponent} from './modules/skill/page/skill/skills.component';
import {SalaryCreateComponent} from "./modules/salary/dialog/salary-create/salary-create.component";
import {SalaryDeleteConfirmComponent} from "./modules/salary/dialog/salary-delete-confirm/salary-delete-confirm.component";
import {SalaryComponent} from './modules/salary/page/salary/salary.component';
import {SalaryEditComponent} from "./modules/salary/dialog/salary-edit/salary-edit.component";
import {FleetComponent} from "./modules/fleet/page/fleet/fleet.component";
import {SharedModule} from "@shared/shared.module";

//Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {EditSkillDialogComponent} from "./modules/skill/dialog/edit-skill-dialog/edit-skill-dialog.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {InsertSkillDialogComponent} from "./modules/skill/dialog/insert-skill-dialog/insert-skill-dialog.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { DocumentComponent } from './modules/document/page/document/document.component';
import { DocumentCreateComponent } from './modules/document/dialog/document-create/document-create.component';
import { DocumentEditComponent } from './modules/document/dialog/document-edit/document-edit.component';
import { DocumentDeleteConfirmComponent } from './modules/document/dialog/document-delete-confirm/document-delete-confirm.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { EmployeeComponent } from './modules/employee/page/employee/employee.component';
import { EmployeeInsertComponent } from './modules/employee/page/employee-insert/employee-insert.component';
import { EmployeeDetailComponent } from './modules/employee/page/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './modules/employee/page/employee-edit/employee-edit.component';
import {EmployeeModule} from "./modules/employee/employee.module";

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SalaryComponent,
    SalaryCreateComponent,
    SalaryDeleteConfirmComponent,
    SalaryEditComponent,
    DocumentComponent,
    DocumentCreateComponent,
    DocumentEditComponent,
    DocumentDeleteConfirmComponent,
    FleetComponent,
    InsertSkillDialogComponent,
    SalaryComponent,
    EditSkillDialogComponent,
    EmployeeComponent,
    EmployeeInsertComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent
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
        MatDialogModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        MatDialogModule,
        MatPaginatorModule,
        EmployeeModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
  },
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
