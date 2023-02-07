import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Skill} from "@shared/model/dto/skill.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {SkillCreatePayloadInterface} from "@shared/model/payload/create/SkillCreatePayload.interface";
import {SkillService} from "@shared/service/crud/skill.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-insert-skill-dialog',
  templateUrl: './insert-skill-dialog.component.html',
  styleUrls: ['./insert-skill-dialog.component.scss']
})
export class InsertSkillDialogComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { skill: Skill }, private skillService: SkillService, public dialogRef: MatDialogRef<InsertSkillDialogComponent>) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }


  insert(title: string, description: string) {

    const employees: Employee[] = []
    const skill: SkillCreatePayloadInterface = {title, description, employees}
    let result = this.skillService.create(skill);
    result.subscribe(r => {

    })
    this.dialogRef.close()
  }

}
