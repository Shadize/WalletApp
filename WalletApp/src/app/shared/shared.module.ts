import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { ObsCompComponent } from './test/obs-comp/obs-comp.component';

@NgModule({
  declarations: [
    ObsCompComponent
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
