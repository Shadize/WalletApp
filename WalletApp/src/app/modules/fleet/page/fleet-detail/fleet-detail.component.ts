import {Component, Inject, Input, OnInit} from '@angular/core';
import {Fleet} from "@shared/model/dto/fleet.interface";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-fleet-detail',
  templateUrl: './fleet-detail.component.html',
  styleUrls: ['./fleet-detail.component.scss']
})
export class FleetDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Fleet,
              public dialog: MatDialog) { }

  ngOnInit(): void {

  }




}
