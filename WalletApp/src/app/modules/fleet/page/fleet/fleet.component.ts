import {AfterViewInit, Component, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {Subscription} from "rxjs";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Salary} from "@shared/model/dto/salary.interface";
import {MatDialog} from "@angular/material/dialog";
import {FleetDetailComponent} from "../fleet-detail/fleet-detail.component";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit, OnDestroy
{

  /* Dans ce component j'ai implémenté un liste Subscripion à laquelle j'ajoute chaque subscription.
  *  Lorsque je quitte la page, j'unsubscribe à toutes les Subscriptions.
  * */
  constructor(public fleetService: FleetService,
              public dialog: MatDialog,
              public router: Router) {
  }
  fleetList: Fleet[] = [];
  subList: Subscription[] = [];
  referenceColumns: string[] = ['fleetId','title','description','type','cost','employee','option'];
  displayedColumns: string[] = ['title','description','type','cost','employee','option'];
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
// Fonction pour supprimer un fleet et refresh la list des fleets
  delete(fleet: Fleet){
    this.fleetService.remove(fleet.fleetId!).subscribe( () => {
      this.refreshList();
    });
  }

  // ouvre une fenetre de dialog pour voir les details d'un fleet
  openDetailFleetDialog(fleet: Fleet){
    this.dialog.open(FleetDetailComponent,{
      width: '50%', data: fleet
    })
  }
}
