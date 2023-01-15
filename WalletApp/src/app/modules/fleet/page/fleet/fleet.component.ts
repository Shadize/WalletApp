import {Component, OnDestroy, OnInit} from '@angular/core';
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FleetCreatePayloadInterface} from "@shared/model/payload/create/FleetCreatePayload.interface";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit, OnDestroy
{
  fleetList: Fleet[] = [];
  subList: Subscription[] = [];

  constructor(public fleetService: FleetService) {
  }

  ngOnInit(): void {
    this.subList.push(
      this.fleetService.fleetList$$.asObservable().subscribe(data =>{
      this.fleetList = data
      })
    )
    this.fleetService.list2();


   let test = interval(1000);
  }

  ngOnDestroy(): void {
    this.subList.forEach(e => {
      e.unsubscribe()
    })
  }

  insert(title: string, description: string, type: string, cost: string)
  {
    let payload: FleetCreatePayloadInterface = {title, description, type, cost: parseFloat(cost)}

    this.subList.push(
      this.fleetService.create(payload).subscribe(data => {
      console.log(data.result);
      this.fleetService.list2();
      })
    );

  };

  refresh() {
    console.log(this.subList);
    console.log(this.fleetList);
    this.fleetService.list2();
    console.log(this.subList);
    console.log(this.fleetList);
  }

}





// ngOnInit(): void {
//   this.fleetService.list().subscribe(data =>
//   {
//     this.fleetList = data;
//     console.log(data);
//   })
//
//   list$.pipe(
//     map
//     (
//       (response:Fleet[]) =>
//       {
//         this.fleetList = response;
//       }
//     )
//   ).subscribe()
// }
//

