import { Component, OnInit } from '@angular/core';
//import { LoadingBarService } from '@ngx-loading-bar/core';
import { ProgressBarService } from '../../services/progress-bar/progressbar.service';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
  
})
export class ProgressBarComponent implements OnInit {

  loading:boolean;
  constructor(public loadingBar: ProgressBarService) { }

  ngOnInit() {
    this.loadingBar.currentMessage.subscribe(message => this.loading = message);
    console.log("------------------------");
    console.log(this.loading);
  }
  
  

}
