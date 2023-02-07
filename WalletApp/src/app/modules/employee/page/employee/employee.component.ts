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

  // Déclaration du nom des colonnes de la table affichées et celle de références
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

  // Fonction pour ouvrir le dialog de détail d'un employé
  openDetailEmployeeDialog(employee: Employee){
    this.dialog.open(EmployeeDetailComponent, {
      width: '50%',
      data: employee
    });
  }

  // Rafraichir la liste des employés
  refreshList(){
    this.employeeService.list().subscribe(data => {
      this.employeeList = data;
      this.dataSource = new MatTableDataSource<any>(this.employeeList);
    });
  }

  // Supprimer un employé et l'envoie dans l'entity manager pour supprimé les références qui ont
  // des relations 1-1 ou 1-n avec employee
  delete(employee: Employee) {

    this.employeeService.remove(employee.employeeId!).subscribe(() => {
      this.entityManager.onEmployeeDelete(employee);
      this.refreshList();
    });
  }








}
