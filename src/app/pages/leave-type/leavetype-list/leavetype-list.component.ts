import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../../../@akt/services/leave-type/leaveType.service';
import { ProgressBarService } from '../../../../@akt/services/progress-bar/progressbar.service';

@Component({
  selector: 'app-leavetype-list',
  templateUrl: './leavetype-list.component.html',
  styleUrls: ['./leavetype-list.component.css']
})
export class LeavetypeListComponent implements OnInit {

  leaveTypes;
  errorMsg;
  loading = true;

  constructor(private _leaveTypeService: LeaveTypeService,private progressBarData: ProgressBarService) { }

  ngOnInit() {
    this.getAllLeaveTypes();
    this.progressBarData.changeMessage(true);
  }

  getAllLeaveTypes() {
    this.progressBarData.changeMessage(true);
    this._leaveTypeService.getAllLeaveTypes()
      .subscribe(
        data => {
          this.leaveTypes = data;
          this.progressBarData.changeMessage(false);
          // console.log("leaveTypes data: ", data);
        },
        error => this.errorMsg = error);
  }

  searchLeaveType(form) {
    // console.log(form.value);
    this.progressBarData.changeMessage(true);
    this._leaveTypeService.searchByLeaveType(form.value.q).subscribe(res => {
      this.leaveTypes = res;
      this.progressBarData.changeMessage(false);
    }, error => {
      this.errorMsg = error;
    });
  }


}
