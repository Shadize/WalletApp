import {Component, OnInit} from '@angular/core';
import {TimesheetService} from "@shared/service/crud/timesheet.service";
import {Timesheet} from "@shared/model/dto/timesheet.interface";
import {InsertTimesheetDialogComponent} from "../../dialog/insert-timesheet-dialog/insert-timesheet-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {EditTimesheetDialogComponent} from "../../dialog/edit-timesheet-dialog/edit-timesheet-dialog.component";

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit{

  dataSource: Timesheet[] = [];
  columnsToDisplay: string[] = ['startDate', 'startHours', 'endHours','comment', 'timesheetType', 'employee', 'edit'];

  constructor(private timesheetService: TimesheetService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchTimesheetList()
  }

  fetchTimesheetList(){
    this.timesheetService.list().subscribe(data => {
      data.map((timesheet: Timesheet) => {
        timesheet.startDate = new Date(timesheet.startDate)
        timesheet.startHours = new Date(timesheet.startHours)
        timesheet.endHours = new Date(timesheet.endHours)
      })
      this.dataSource = data
    })
  }

  openInsertDialog(){
    let dialogRef = this.dialog.open(InsertTimesheetDialogComponent )
    dialogRef.afterClosed().subscribe(result => {
      this.fetchTimesheetList()
    })
  }

  openEditDialog(timesheet: Timesheet){
    let dialogRef = this.dialog.open(EditTimesheetDialogComponent, {data: {timesheet: timesheet}})
    dialogRef.afterClosed().subscribe(result => {
      this.fetchTimesheetList()
    })
  }

  delete(timesheet: Timesheet){
    this.timesheetService.remove(timesheet.timesheetId!).subscribe(response => {
      this.fetchTimesheetList()
    })
  }
}
