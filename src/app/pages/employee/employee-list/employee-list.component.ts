import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import { EmployeeService } from './../../../../@akt/services/employee/employee.service';
import { ProgressBarService } from '../../../../@akt/services/progress-bar/progressbar.service';
import { Employee } from '../../../../@akt/interface/employee';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  EmployeeData: Array<Employee>;
  errorMsg;
  loading = true;
  currentPage = 1;
  pageSize =10;
  pageEvent: PageEvent;
  sortKey = 'firstName';

  constructor(private _employeeService: EmployeeService,private progressBarData: ProgressBarService
    ,private route:Router) {
     
      this.EmployeeData=Array<any>();

     }
  displayedColumns: string[] = ['select','firstName', 'email', 'username', 'role','phoneNumber','status'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);
  ngOnInit() {
    this.getAllEmployees();
    this.loading=true;
    this.progressBarData.changeMessage(true);
    this.dataSource.sort = this.sort;
  }

  getAllEmployees() {
    console.log(this.currentPage-1);
    console.log(this.pageSize);
    this._employeeService.getAllEmployees(this.currentPage-1, this.pageSize, this.sortKey)
      .subscribe(
        data => {
          console.log(data.content);
          this.dataSource.data = data.content;
          this.paginator.length=data.totalElements;
          this.progressBarData.changeMessage(false);
          this.loading=false;
        },
        error => this.errorMsg = error);
  }
  onPaginateChange(event){
    console.log(event);
    this.progressBarData.changeMessage(true);
    this.pageSize=event.pageSize;
    this.currentPage=event.pageIndex+1;
    this.getAllEmployees();
  }

  /*
  searchEmployee(form) {
    this.progressBarData.changeMessage(true);
    this._employeeService.getEmployeeByFullName(form.value.q).subscribe(data => {
      this.employees = data;
      this.progressBarData.changeMessage(false);
    }, error => {
      this.errorMsg = error;
    });
  }
  */
 /** Whether the number of selected elements matches the total number of rows. */
 isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?:any): string {
  if (!row) {
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}
  
  viewEmploye(employe){
    //console.log(employe);
    this.route.navigateByUrl('/employees/view/'+employe.employeeId);
  } 

}
