import {Component, OnInit} from '@angular/core';
import {Employee} from "@shared/model/dto/employee.interface";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {tap} from "rxjs";
import {map} from "rxjs/operators";
import {SkillService} from "@shared/service/crud/skill.service";
import {Skill} from "@shared/model/dto/skill.interface";

@Component({
  selector: 'app-obs-comp',
  templateUrl: './obs-comp.component.html',
  styleUrls: ['./obs-comp.component.scss']
})
export class ObsCompComponent implements OnInit{
  skills: Skill[] = [];
  constructor(private skillService : SkillService) {
  }
  ngOnInit(): void {
    if(!this.skillService)
    {
      console.log("il est vide")
    }
    else {
      this.skillService.list().pipe
      (
        map((data: Skill[]) => {
            this.skills = data;
          }
        )
      ).subscribe()
    }

    // this.skillService.list().subscribe(data => {
    //   console.log("Data in obs");
    //   console.log(data);
    //   this.skills = data;
    // })

  }



  // this.employeeService.list().pipe
  // (
  //   tap((data:Employee[]) =>
  // this.employees = data
  // )
  // ).subscribe()



}
