import {Component, OnDestroy, OnInit} from '@angular/core';
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FleetCreatePayloadInterface} from "@shared/model/payload/create/FleetCreatePayload.interface";
import {Subscription} from "rxjs";

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
        this.refreshList();
      })
    )

  }

  ngOnDestroy(): void {
    this.subList.forEach(e => {
      e.unsubscribe()
    })
  }

  insert(title: string, description: string, type: string, cost: string)
  {
    let payload: FleetCreatePayloadInterface = {title, description, type, cost: parseFloat(cost)};

    this.subList.push(
      this.fleetService.create(payload).subscribe(data => {
      if(data.result)
      {
        // Afficher un truc "Success"
      }
      this.refreshList();
      })
    );

  };

  refreshList() {
    this.fleetService.list2();
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

