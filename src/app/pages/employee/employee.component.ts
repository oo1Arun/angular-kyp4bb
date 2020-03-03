import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../@akt/services/auth/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit() {
  }

}
