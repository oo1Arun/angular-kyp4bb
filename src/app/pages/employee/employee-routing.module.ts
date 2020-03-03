import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeManageComponent } from './employee-manage/employee-manage.component';

const childrenRoutes: Routes = [
  {
    path:'',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component : EmployeeListComponent
  },
  {
    path: 'view/:id',
    component : EmployeeDetailsComponent
  },
  {
    path: 'create',
    component : EmployeeManageComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: childrenRoutes,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }