import {Component, Injectable, OnInit} from '@angular/core';
import { Observable} from 'rxjs';
import {SkillService} from "@shared/service/crud/skill.service";
import {Skill} from "@shared/model/dto/skill.interface";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})

@Injectable()
export class TestsComponent implements OnInit{

  constructor(private skillService: SkillService) {}

  ngOnInit() {

  }

  foo() {
    let skillList: Observable<Skill[]>;
    skillList = this.skillService.list();

    skillList.subscribe(data => {
      console.log(data);
    })
  }


}
