import {Component, OnDestroy, OnInit} from '@angular/core';
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FleetCreatePayloadInterface} from "@shared/model/payload/create/FleetCreatePayload.interface";
import {Subscription} from "rxjs";
import {isNil} from "lodash";
import {waitForAsync} from "@angular/core/testing";

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit, OnDestroy
{
  fleetList: Fleet[] = [];
  subList: Subscription[] = [];
  referenceColumns: string[] = ['fleetId','title','description','type','cost','employee','option'];
  displayedColumns: string[] = this.referenceColumns.slice();

  test: Fleet= {};

  constructor(public fleetService: FleetService) {
  }

  ngOnInit(): void {
    this.subList.push(
      this.fleetService.fleetList$$.asObservable().subscribe(data => {
        this.fleetList = data;
      })
    )

    console.log(this.fleetList);

    this.refreshList();
    // console.log(this.fleetList);
    //
    //
    // // console.log(this.displayedColumns, this.referenceColumns);
    // // console.log(this.fleetList);
    //
    // let test2 = Object.keys(this.fleetList[0]);
    // if(!isNil(test2))
    // {
    //   console.log(test2)
    // }
  }


  // Fonction qui s'exécute lorsqu'on quitte la page, unscirbe à toutes les Subcriptions
  ngOnDestroy(): void {
    this.subList.forEach(e => {
      e.unsubscribe()
    })
  }
  // Fonction qui permet juste d'actualiser la liste des Fleets
  refreshList() {
    this.fleetService.list();
  }

  columnManage(column: string){

    console.log(this.referenceColumns, this.displayedColumns);

    console.log(this.displayedColumns.indexOf(column));


    let index = this.displayedColumns.indexOf(column);

    if(!isNil(index) && index >= 0)
    {
      this.displayedColumns.splice(index,1);
    }
    else
    {
      let indexRef = this.referenceColumns.indexOf(column);

      let temp = this.displayedColumns.slice(0,indexRef);
      let temp2 = this.displayedColumns.slice(indexRef);

      console.log("temp : " + temp + " _ " + temp2);

      //this.displayedColumns = temp.concat(this.referenceColumns[indexRef], temp2);
      //this.displayedColumns = this.displayedColumns.slice(0, indexRef).concat(this.referenceColumns[indexRef], temp2);
      // this.displayedColumns.push(column);
    }
    console.log(this.referenceColumns, this.displayedColumns);
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


// Fonction pour supprimer un fleet et refresh la page
  delete(fleet: Fleet){
    console.log(fleet)
    this.fleetService.remove(fleet.fleetId!).subscribe( data => {
      console.log(data);
      this.refreshList();
    });

  }

}
