import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillRoutingModule } from './skill-routing.module';
import {FormsModule} from "@angular/forms";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogRef} from "@angular/material/dialog"
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import { InsertSkillDialogComponent } from './dialog/insert-skill-dialog/insert-skill-dialog.component';
import { EditSkillDialogComponent } from './dialog/edit-skill-dialog/edit-skill-dialog.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    CommonModule,
    SkillRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})

export class SkillModule {

}
