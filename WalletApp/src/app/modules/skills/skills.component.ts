import {Component, OnInit} from '@angular/core';
import {Skill} from "@shared/model/dto/skill.interface";
import {SkillService} from "@shared/service/crud/skill.service";

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
   setTimeout(() => {
     this.skillService.list().subscribe(data => {
       console.log("Data in obs");
       console.log(data);
       this.dataSource = data;
     })
   }, 3000)
  }

  edit(element: Skill){
    console.log(element);
  }


  // dataSource: Skill[] = [
  //   {title: "Programming", description: "Blabla", employees: []},
  //   {title: "Cooking", description: "Blabla", employees: []},
  //   {title: "Manager", description: "Blabla", employees: []},
  //   {title: "Math", description: "Blabla", employees: []},
  // ]


  columnsToDisplay: string[] = ['title', 'description', 'edit'];

}
