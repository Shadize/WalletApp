import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Skill} from "@shared/model/dto/skill.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {SkillCreatePayloadInterface} from "@shared/model/payload/create/SkillCreatePayload.interface";
import {SkillService} from "@shared/service/crud/skill.service";

@Component({
  selector: 'app-insert-skill-dialog',
  templateUrl: './insert-skill-dialog.component.html',
  styleUrls: ['./insert-skill-dialog.component.scss']
})
export class InsertSkillDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: {skill: Skill}, private skillService: SkillService) { }

  insert(title: string, description: string){
    const employees: Employee[] = []
    const skill: SkillCreatePayloadInterface = {title, description, employees }
    let result = this.skillService.create(skill);
    result.subscribe(r => {
      console.log(r)
    })
  }
}
