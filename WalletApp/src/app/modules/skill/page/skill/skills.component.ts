import {Component, Inject, OnInit} from '@angular/core';
import {Skill} from "@shared/model/dto/skill.interface";
import {SkillService} from "@shared/service/crud/skill.service";
import {SkillCreatePayloadInterface} from "@shared/model/payload/create/SkillCreatePayload.interface"
import {Employee} from "@shared/model/dto/employee.interface";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SkillDialogComponent} from "../../skill-dialog/skill-dialog.component";
import {InsertSkillDialogComponent} from "../../dialog/insert-skill-dialog/insert-skill-dialog.component";

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



  edit(skill: Skill){
    console.log(skill)
  }

  delete(skill: Skill){
    this.skillService.remove(skill.skillId!).subscribe(response => {
      console.log(response)
    })
  }

  openInsertDialog(){
    let dialogRef = this.dialog.open(InsertSkillDialogComponent )

  }

  openEditDialog(skill: Skill){
    let dialogRef = this.dialog.open(SkillDialogComponent, {width: '800px', height: '600px', data: {
        skill: skill
      }})
    dialogRef.afterClosed().subscribe(result => {
      console.log("open")
      console.log(result)
    })
  }

}
