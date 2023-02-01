import {NgModule} from '@angular/core';
import {SecurityRoutingModule} from './security-routing.module';
import {SigninComponent, SignupComponent} from '@security/page';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

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
  ],
  providers: []
})
export class SecurityModule {
}
