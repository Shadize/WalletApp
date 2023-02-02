import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FleetService} from "@shared/service/crud/fleet.service";
import {Fleet} from "@shared/model/dto/fleet.interface";

@Component({
  selector: 'app-fleet-edit',
  templateUrl: './fleet-edit.component.html',
  styleUrls: ['./fleet-edit.component.scss']
})
export class FleetEditComponent implements OnInit {

  constructor(public route: ActivatedRoute,
              public fleetService : FleetService) { }

  fleetId : string = '';
  fleet : Fleet | undefined;

  ngOnInit(): void {
    this.fleetId = this.route.snapshot.paramMap.get('id') || '';
    this.fleetService.detail(this.fleetId).subscribe(data => {
      this.fleet = data;
    })

  }

}
