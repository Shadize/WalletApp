import {AfterViewInit, Component, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FleetCreatePayloadInterface} from "@shared/model/payload/create/FleetCreatePayload.interface";
import {Subscription} from "rxjs";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit, OnDestroy, AfterViewInit
{
  constructor(public fleetService: FleetService) {
  }


  fleetList: Fleet[] = [];
  subList: Subscription[] = [];
  referenceColumns: string[] = ['fleetId','title','description','type','cost','employee','option'];
  displayedColumns: string[] = this.referenceColumns.slice();
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;



  ngOnInit(): void
  {
    this.refreshList();

    this.subList.push(
      this.fleetService.fleetList$$.asObservable().subscribe(data => {
        this.fleetList = data;
        this.dataSource = new MatTableDataSource<any>(this.fleetList);
        this.dataSource.paginator = this.paginator;
      })
    )
  }
  ngAfterViewInit(): void
  {

  }

  // Fonction qui s'exécute lorsqu'on quitte la page, unsubscribe à toutes les Subcriptions
  ngOnDestroy(): void {
    this.subList.forEach(e => {
      e.unsubscribe()
    })
  }

  // Fonction qui permet juste d'actualiser la liste des Fleets
  refreshList() {
    this.fleetService.list();
  }



// Fonction pour supprimer un fleet et refresh la page
  delete(fleet: Fleet){
    // console.log(fleet)
    this.fleetService.remove(fleet.fleetId!).subscribe( () => {
      // console.log(data);
      this.refreshList();
    });

  }

}
