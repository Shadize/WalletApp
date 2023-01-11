import {Component, OnInit} from '@angular/core';
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit
{
  constructor(public fleetService: FleetService) {
  }

  fleetList: Fleet[] = [];

  ngOnInit(): void {
    // let list$ = this.fleetService.list();
    // list$.subscribe(data =>
    // {
    //   this.fleetList = data;
    //   console.log(data);
    // })
  }

}
