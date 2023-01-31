import {Component, Inject, OnInit} from '@angular/core';
import {Skill} from "@shared/model/dto/skill.interface";
import {SkillService} from "@shared/service/crud/skill.service";
import {SkillCreatePayloadInterface} from "@shared/model/payload/create/SkillCreatePayload.interface"
import {Employee} from "@shared/model/dto/employee.interface";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {InsertSkillDialogComponent} from "../../dialog/insert-skill-dialog/insert-skill-dialog.component";
import {EditSkillDialogComponent} from "../../dialog/edit-skill-dialog/edit-skill-dialog.component";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})


export class SkillsComponent implements OnInit{

  dataSource: Skill[] = [];
  allEmployeeList: Employee[] = [];
  columnsToDisplay: string[] = ['title', 'description', 'employees', 'edit'];

  constructor(private skillService: SkillService, public dialog: MatDialog, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    //Loading skills for datasource
    this.fetchSkillList()
    //Loading employees for edit dialog
    this.fetchEmployeeList()
  }

  fetchSkillList(){
    this.skillService.list().subscribe(data => {
      this.dataSource = data
    })
  }

  fetchEmployeeList(){
    this.employeeService.list().subscribe(data => {
      this.allEmployeeList = data
    })
  }

  //Delete skill by passing the skill object
  delete(skill: Skill){
    this.skillService.remove(skill.skillId!).subscribe(response => {
      this.fetchSkillList()
    })
  }

  //Open dialog for inserting new skill
  openInsertDialog(){
    let dialogRef = this.dialog.open(InsertSkillDialogComponent )
    dialogRef.afterClosed().subscribe(result => {
      this.fetchSkillList()
    })
  }


  //Open dialog for editing skill
  openEditDialog(skill: Skill){
    let dialogRef = this.dialog.open(EditSkillDialogComponent, { data: {
        skill: skill,
        allEmployeeList: this.allEmployeeList
      }})
    dialogRef.afterClosed().subscribe(result => {
      this.fetchSkillList()
    })
  }

}
