import {Component, OnInit} from '@angular/core';
import {Skill} from "@shared/model/dto/skill.interface";
import {SkillService} from "@shared/service/crud/skill.service";
import {SkillCreatePayloadInterface} from "@shared/model/payload/create/SkillCreatePayload.interface"
import {Employee} from "@shared/model/dto/employee.interface";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})


export class SkillsComponent implements OnInit{

  dataSource: Skill[] = [];

  constructor(private skillService: SkillService) {
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

  // dataSource: Skill[] = [
  //   {title: "Programming", description: "Blabla", employees: []},
  //   {title: "Cooking", description: "Blabla", employees: []},
  //   {title: "Manager", description: "Blabla", employees: []},
  //   {title: "Math", description: "Blabla", employees: []},
  // ]

  columnsToDisplay: string[] = ['title', 'description', 'employees', 'edit'];

}
