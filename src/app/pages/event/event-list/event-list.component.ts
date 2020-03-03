import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../../@akt/services/event/event.service';
import { ProgressBarService } from '../../../../@akt/services/progress-bar/progressbar.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events;
  errorMsg;

  loading = true;
  currentPage = 1;
  totalElements;
  numberOfElements;
  size = 10;
  sortKey = 'title';
  reverse = false;

  isEdit = false;

  constructor(private _eventService: EventService,private progressBarData: ProgressBarService) { }

  ngOnInit() {
    this.isEdit = false;
    this.getAllEvents();
    this.progressBarData.changeMessage(true);
  }

  selectEvent(event) {
    this.isEdit = true;
    //console.log('is edit', event);
  }

  getPage(page: number) {
    this.progressBarData.changeMessage(true);
    this.currentPage = page;
    this.getAllEvents();
  }
  sort(key: string) {
    this.progressBarData.changeMessage(true);
    this.sortKey = key + ','.concat(this.reverse ? 'DESC' : 'ASC');
    this.reverse = !this.reverse;
    this.getAllEvents();
  }

  getAllEvents() {
    this._eventService.getAllEvents(this.currentPage - 1, this.size, this.sortKey)
      .subscribe(
        data => {
          this.events = data.content;
          this.totalElements = data.totalElements;
          this.size = data.size;
          this.numberOfElements = data.numberOfElements;
          this.progressBarData.changeMessage(false);
          this.isEdit = false;
          // console.log('Events data: ', data);
        },
        error => this.errorMsg = error);
  }


}
