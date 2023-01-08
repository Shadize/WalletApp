import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { FormComponent } from './form/form.component';
import { BasicFormComponent } from './form/basic-form/basic-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    FormComponent,
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  exports: []
})
export class SharedModule {
}
