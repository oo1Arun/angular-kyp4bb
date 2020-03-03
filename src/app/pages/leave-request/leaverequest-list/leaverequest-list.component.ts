import { Component, OnInit } from '@angular/core';
import { Observable, Subject, concat, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
// services
import { EmployeeService } from '../../../../@akt/services/employee/employee.service';
import { EmployeeLeaveService } from '../../../../@akt/services/leave/employeeLeave.service';
import { ProgressBarService } from '../../../../@akt/services/progress-bar/progressbar.service';


@Component({
  selector: 'app-leaverequest-list',
  templateUrl: './leaverequest-list.component.html',
  styleUrls: ['./leaverequest-list.component.css']
})
export class LeaverequestListComponent implements OnInit {

  leaveRequests;
  errorMsg;

  loading = true;
  currentPage = 1;
  totalElements;
  numberOfElements;
  size = 10;
  sortKey = 'fromDate';
  reverse = false;

  allEmployees: Observable<any>;
  employeeinput$ = new Subject<string>();
  isSelectLoading = false;

  constructor(private _employeeLeaveService: EmployeeLeaveService, private _employeeService: EmployeeService
    ,private progressBarData: ProgressBarService) { }

  ngOnInit() {
    this.getAllEmployeeLeaves();
    this.loadEmployee();
    this.progressBarData.changeMessage(true);
  }

  getPage(page: number) {
    this.progressBarData.changeMessage(true);
    this.currentPage = page;
    this.getAllEmployeeLeaves();
  }
  sort(key: string) {
    this.progressBarData.changeMessage(true);
    this.sortKey = key + ','.concat(this.reverse ? 'DESC' : 'ASC');
    this.reverse = !this.reverse;
    this.getAllEmployeeLeaves();
  }

  getAllEmployeeLeaves() {
    this._employeeLeaveService.getAllEmployeeLeaves(this.currentPage - 1, this.size, this.sortKey)
      .subscribe(
        data => {
          this.leaveRequests = data.content;
          this.totalElements = data.totalElements;
          this.size = data.size;
          this.numberOfElements = data.numberOfElements;
          this.progressBarData.changeMessage(false);
          // console.log('employees data: ', data);
        },
        error => this.errorMsg = error);
  }

  private loadEmployee() {
    this.allEmployees = concat(
      of([]), // default items
      this.employeeinput$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => this.isSelectLoading = true),
        switchMap(term => this._employeeService.getEmployeeByFullName(term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.isSelectLoading = false)
        ))
      )
    );
  }

}
