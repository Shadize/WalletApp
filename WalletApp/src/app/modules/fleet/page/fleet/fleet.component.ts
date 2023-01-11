import {Component, OnInit} from '@angular/core';
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FleetCreatePayloadInterface} from "@shared/model/payload/create/FleetCreatePayload.interface";
import {Employee} from "@shared/model/dto/employee.interface";
import {map} from "rxjs/operators";
import {ApiResponse} from "@shared/model";
import {Company} from "@shared/model/dto/company.interface";


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
    this.fleetService.list().subscribe(data =>
    {
      this.fleetList = data;
      console.log(data);
    })

    // list$.pipe(
    //   map
    //   (
    //     (response:Fleet[]) =>
    //     {
    //       this.fleetList = response;
    //     }
    //  )
    // ).subscribe()
  }

  insert(title: string, description: string, type: string, cost: string)
  {

    let payload: FleetCreatePayloadInterface = {title, description, type, cost: parseFloat(cost)}

    this.fleetService.create(payload).subscribe(data =>
    {

    })


  }

}
