import {Component, Inject, OnInit} from '@angular/core';
import {Skill} from "@shared/model/dto/skill.interface";
import {SkillService} from "@shared/service/crud/skill.service";
import {SkillCreatePayloadInterface} from "@shared/model/payload/create/SkillCreatePayload.interface"
import {Employee} from "@shared/model/dto/employee.interface";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SkillDialogComponent} from "../../skill-dialog/skill-dialog.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})


export class SkillsComponent implements OnInit{

  dataSource: Skill[] = [];
  columnsToDisplay: string[] = ['title', 'description', 'employees', 'edit'];


  constructor(private skillService: SkillService, public dialog: MatDialog ) {
  }

  ngOnInit(): void {
    //Loading list

          this.skillService.list().subscribe(data => {
          this.dataSource = data
     })
  }

  insert(title: string, description: string){
    const employees: Employee[] = []
    const skill: SkillCreatePayloadInterface = {title, description, employees }
    let result = this.skillService.create(skill);
    result.subscribe(r => {
      console.log(r)
    })
  }

  edit(skill: Skill){
    console.log(skill)
  }

  delete(skill: Skill){
    this.skillService.remove(skill.skillId!).subscribe(response => {
      console.log(response)
    })
  }

  openDialog(skill: Skill){
    let dialogRef = this.dialog.open(SkillDialogComponent, {width: '800px', height: '600px', data: {
       skill: skill
      }})
    dialogRef.afterClosed().subscribe(result => {
      console.log("open")
      console.log(result)
    })
  }


}
