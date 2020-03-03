import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule, DatePipe } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatDividerModule } from '@angular/material/divider';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//dashboards component
import { CardhomeComponent } from './cardhome/cardhome.component';
import { DashSectionSecondComponent } from './dash-section-second/dash-section-second.component';
import { LeaverequestperiodComponent } from './leave-request-period/leave-request-period.component';
import { DashCalendarComponent } from './calendar-contents/dash-calendar/dash-calendar.component';
import { CalendarHeaderComponent } from './calendar-contents/calendar-header/calendar-header.component';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    DashboardRoutingModule,
    MatDividerModule,
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule,
    NgxChartsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [
    DashboardComponent,CardhomeComponent,DashSectionSecondComponent,
    DashCalendarComponent,CalendarHeaderComponent,LeaverequestperiodComponent
   ],
  providers: [],
  exports:[DashboardComponent,CardhomeComponent,DashSectionSecondComponent,
    DashCalendarComponent,CalendarHeaderComponent,LeaverequestperiodComponent]
})
export class DashboardModule { }
