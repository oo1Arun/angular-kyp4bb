import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module'; 
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeManageComponent } from './employee-manage/employee-manage.component';
import { EmployeeComponent } from './employee.component';
import { MaterialModule } from '../../../@akt/shared/material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [EmployeeListComponent,EmployeeDetailsComponent,EmployeeManageComponent,EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    MatInputModule,
    MatDividerModule,
    NgSelectModule,
    MatSortModule,
    MatPaginatorModule 
  ],
  exports:[
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeManageComponent,
    EmployeeComponent
  ]
})
export class EmployeeModule { }
