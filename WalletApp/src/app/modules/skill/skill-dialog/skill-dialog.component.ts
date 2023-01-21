import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Skill} from "@shared/model/dto/skill.interface";


@Component({
  selector: 'app-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: ['./skill-dialog.component.scss']
})
export class SkillDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {skill: Skill}) { }
}


