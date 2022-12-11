import {Component, Injectable, OnInit} from '@angular/core';
import {HttpService} from "@shared/service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fabian-comp',
  templateUrl: './fabian-comp.component.html',
  styleUrls: ['./fabian-comp.component.scss']
})

@Injectable()
export class FabianCompComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

  }




  test = () => {

  }

  get() : void{

  }


}
