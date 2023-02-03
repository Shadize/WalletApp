import {Component, Inject, OnInit} from '@angular/core';
import {Employee} from "@shared/model/dto/employee.interface";
import {Contract} from "@shared/model/dto/contract.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Timesheet} from "@shared/model/dto/timesheet.interface";
import {TimesheetService} from "@shared/service/crud/timesheet.service";
import {EmployeeService} from "@shared/service/crud/employee.service";
import {ContractService} from "@shared/service/crud/contract.service";
import {InsertTimesheetDialogComponent} from "../insert-timesheet-dialog/insert-timesheet-dialog.component";
import {TimesheetUpdatePayload} from "@shared/model/payload/update/TimesheetUpdatePayload.interface";

@Component({
  selector: 'app-edit-timesheet-dialog',
  templateUrl: './edit-timesheet-dialog.component.html',
  styleUrls: ['./edit-timesheet-dialog.component.scss']
})
export class EditTimesheetDialogComponent implements OnInit{
  //Default values
  timesheetId?: string;
  startDate: Date = new Date();
  startHoursString: string = "08:00";
  endHoursString: string = "16:00";
  comment: string = "";
  timesheetType: string = "Billable";
  selectedEmployee: Employee = {} as Employee ;
  selectedContract: Contract = {} as Contract;
  allEmployeeList: Employee[] = [];
  allContractList: Contract[] = [];
  formGroup!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {timesheet: Timesheet},
              private timesheetService: TimesheetService,
              public dialogRef: MatDialogRef<InsertTimesheetDialogComponent>,
              private employeeService: EmployeeService,
              private contractService: ContractService) {}

  ngOnInit(): void {
    this.fetchDataFromTimesheet(this.data.timesheet)
    this.fetchEmployeeList()
    this.fetchContractList()
  }

  fetchDataFromTimesheet(timesheet: Timesheet){
    this.timesheetId = timesheet.timesheetId!
    this.startDate = timesheet.startDate
    this.startHoursString = String(timesheet.startHours.getHours()).padStart(2, "0") + ":" + String(timesheet.startHours.getMinutes()).padStart(2, "0");
    this.endHoursString = String(timesheet.endHours.getHours()).padStart(2, "0") + ":" + String(timesheet.endHours.getMinutes()).padStart(2, "0");
    this.comment = timesheet.comment
    this.timesheetType = timesheet.timesheetType
    this.selectedEmployee = timesheet.employee
    this.selectedContract = timesheet.contract

    this.formGroup = new FormGroup({
      owner: new FormControl(this.selectedEmployee, Validators.required),
      contract: new FormControl(this.selectedContract, Validators.required),
      startDate: new FormControl(this.startDate, Validators.required),
      startHours: new FormControl(this.startHoursString, Validators.required),
      endHours: new FormControl(this.endHoursString, Validators.required),
      comment: new FormControl(this.comment, Validators.required),
      timesheetType: new FormControl(this.timesheetType, Validators.required)
    })
  }

  update(startDate: Date, startHoursString: string, endHoursString: string, comment: string, timesheetType: string, contractId: string, employeeId: string){
    console.log("Updating timesheet")
    console.log(employeeId)
    const contract = {contractId: contractId} as Contract
    const employee = {employeeId: employeeId} as Employee
    const startHours: Date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), parseInt(startHoursString.substring(0, 2)), parseInt(startHoursString.substring(3, 5)))
    const endHours: Date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), parseInt(endHoursString.substring(0, 2)), parseInt(endHoursString.substring(3, 5)))
    let timesheet: TimesheetUpdatePayload = {timesheetId: this.timesheetId ,startDate, startHours, endHours, comment, timesheetType, contract, employee}
    let result = this.timesheetService.update(timesheet);
    result.subscribe(r => {
      console.log(r)
    })
    this.dialogRef.close()
  }

  //Solve the problem of comparing the objects, because failed with the default compare function
  compareToppings(topping1: Employee, topping2: Employee) {
    return topping1 && topping2 ? topping1.employeeId === topping2.employeeId : topping1 === topping2;
  }

  compareToppings2(topping1: Contract, topping2: Contract) {
    return topping1 && topping2 ? topping1.contractId === topping2.contractId : topping1 === topping2;
  }

  fetchContractList() {
    this.contractService.list().subscribe(data => {
      this.allContractList = data
    })
  }

  fetchEmployeeList(){
    this.employeeService.list().subscribe(data => {
      this.allEmployeeList = data
    })
  }



}
