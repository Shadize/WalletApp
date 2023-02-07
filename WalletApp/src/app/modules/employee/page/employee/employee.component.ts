import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from "@shared/service/crud/employee.service";
import {Employee} from "@shared/model/dto/employee.interface";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeDetailComponent} from "../employee-detail/employee-detail.component";
import {EntityManagerService} from "@shared/service/crud/common/entity-manager.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,
              private entityManager: EntityManagerService,
              private dialog: MatDialog) { }
  referenceColumns: string[] = ['employeeId','lastname', 'firstname', 'active','deletedBy','address','gender', 'birthday', 'ssin', 'status', 'deleted', 'company', 'skills', 'timesheets', 'documents', 'contracts', 'fleets', 'salaries'];
  displayedColumns: string[] = ['lastname', 'firstname', 'active','address','gender','company', 'skills', 'option'];
  employeeList: Employee[] = [];
  dataSource !: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  ngOnInit(): void {
    this.employeeService.list().subscribe(data => {
      this.employeeList = data;
      this.dataSource = new MatTableDataSource<any>(this.employeeList);
      this.dataSource.paginator = this.paginator;
    });
  }

  openDetailEmployeeDialog(employee: Employee){
    this.dialog.open(EmployeeDetailComponent, {
      width: '50%',
      data: employee
    });
  }

  refreshList(){
    this.employeeService.list().subscribe(data => {
      this.employeeList = data;
      this.dataSource = new MatTableDataSource<any>(this.employeeList);
    });
  }

  delete(employee: Employee) {

    this.employeeService.remove(employee.employeeId!).subscribe(() => {
      this.entityManager.onEmployeeDelete(employee);
      this.refreshList();
    });
  }








}
