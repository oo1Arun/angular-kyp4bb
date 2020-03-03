import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../@akt/services/side-bar/sidebar.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  isOpen = false;

  constructor(private _sidebarService: SidebarService) { }

  ngOnInit() {
    this._sidebarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}
