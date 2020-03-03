import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../@akt/services/employee/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this._employeeService.getCurrentEmployee()
      .subscribe(
        res => {
          const role = res.role;
          console.log(res);
          localStorage.setItem('role', role);
        },
        error => {
          // this.login_user_msg = "Oops ! Can't load Profile";
        });
  }

}
