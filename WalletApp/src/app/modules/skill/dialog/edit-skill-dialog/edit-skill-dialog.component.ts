import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Skill} from "@shared/model/dto/skill.interface";
import {SkillService} from "@shared/service/crud/skill.service";
import {Employee} from "@shared/model/dto/employee.interface";
import {SkillUpdatePayloadInterface} from "@shared/model/payload/update/SkillUpdatePayload.interface";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit-skill-dialog',
  templateUrl: './edit-skill-dialog.component.html',
  styleUrls: ['./edit-skill-dialog.component.scss']
})
export class EditSkillDialogComponent implements OnInit{
  ngOnInit(): void {
    //Setting the selected employees
    this.toppings.setValue(this.data.skill.employees.map(employee => employee))
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {skill: Skill, allEmployeeList: Employee[]},
    public dialogRef: MatDialogRef<EditSkillDialogComponent>, private skillService: SkillService) {
  }

  toppings = new FormControl();

  updatedEmployeeList: Employee[] = []

  closeDialog(){
    //Close the dialog by using the ref injected, pass it value to handle it in the parent component
    this.dialogRef.close()
    //Creating a new instance for the new skill object
    let updatedSkill: SkillUpdatePayloadInterface = {
      skillId: this.data.skill.skillId,
      title: this.data.skill.title,
      description: this.data.skill.description,
      employees: this.updatedEmployeeList
    }

    //Updating the skill
    this.skillService.update(updatedSkill).subscribe(response => {

    })
  }
  //Solve the problem of comparing the objects, because failed with the default compare function
  compareToppings(topping1: Employee, topping2: Employee) {
    return topping1 && topping2 ? topping1.employeeId === topping2.employeeId : topping1 === topping2;
  }

  //Triggered when the employee list is changed on view
  handleEmployeeChange(updatedEmployeeList: Employee[]){
    console.log(updatedEmployeeList)
    this.updatedEmployeeList = updatedEmployeeList
  }
}
