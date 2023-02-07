import {NgModule} from '@angular/core';
import {SecurityRoutingModule} from './security-routing.module';
import {SigninComponent, SignupComponent} from '@security/page';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    SecurityRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatButtonModule,
    TranslateModule,
    MatTooltipModule,
  ],
  providers: []
})
export class SecurityModule {
}
