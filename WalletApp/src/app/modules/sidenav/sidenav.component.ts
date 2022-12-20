import {Component, Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SkillService} from "@shared/service/crud/skill.service";
import {Skill} from "@shared/model/dto/skill.interface";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

@Injectable()
export class SidenavComponent implements OnInit {

  constructor(private skillService: SkillService) {
  }

  showFiller: boolean = false;



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
