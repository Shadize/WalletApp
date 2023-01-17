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
  test: String= "Bonjour"
  displayedColumns: string[] = ['title','description','type','cost','employee','option'];
  referenceColumns: String[] = this.displayedColumns.slice();

  constructor(public fleetService: FleetService) {
  }

  ngOnInit(): void {
    this.subList.push(
      this.fleetService.fleetList$$.asObservable().subscribe(data =>{
        this.fleetList = data
        this.refreshList();
      })
    )

    console.log(this.displayedColumns, this.referenceColumns);


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
